import React, { useState, useEffect, useRef } from 'react';

const cardsData = [
    {
        id: 1,
        videoId: 'oV74Najm6Nc?si=P1F1-fnlo0MCNdW',
        title: 'Unveiling the Power of Artificial Intelligence',
        description: 'Explore the transformative impact of artificial intelligence (AI) as we delve into its applications, capabilities, and potential to shape the future.',
    },
    {
        id: 2,
        videoId: '-DEL6SVRPw0?si=K8-yJRBgvqlkrc6x',
        title: "Demystifying Machine Learning: A Beginner's Guide",
        description: "Whether you're a student, a curious individual, or a professional looking to delve into the world of AI, this video provides a solid foundation to kickstart your journey into machine learning.",
    },
    {
        id: 3,
        videoId: 'vkRuh7cEaxw?si=CHXl6jJ_zxs1wnku',
        title: 'Unleashing Web Development Power',
        description: 'From fluid layouts to media queries, discover key techniques to ensure your websites look great and function seamlessly across various devices and screen sizes.',
    },
];

function Card({ videoId, title, description }) {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="relative">
                <iframe
                    className="w-full"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-500 text-base text-sm">{description}</p>
            </div>
        </div>
    );
}

function Capability() {

    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(componentRef.current);

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    useEffect(() => {
        setIsVisible(false);
    }, [componentRef]);

    return (
        <div className='bg-bgLight py-3 mt-[2rem] shadow-md' style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
            <div className='flex flex-col items-center mt-[1rem] mb-[2rem]'>
                <div className='border border-homeBg rounded-2xl px-2 py-1 mb-3 hover:bg-homeBg'>
                    <p className='text-homeBg hover:text-white'>Our Capabilities</p>
                </div>
                <p className='text-lg font-[500] py-1 mb-4'>Unlocking limitless possibilities through cutting-edge artificial intelligence solutions</p>
                <div className="flex flex-wrap justify-center">
                    {cardsData.map(card => (
                        <div ref={componentRef} key={card.id} className={`m-4 ${isVisible ? 'slide-in-left' : ''}`}>
                            <Card {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Capability;