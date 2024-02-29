import React from 'react';

const cardsData = [
    {
        id: 1,
        videoId: 'aZ5EsdnpLMI?si=y1A2K8LVNNjWcGif',
        title: 'Title 1',
        description: 'Description for Card 1',
    },
    {
        id: 2,
        videoId: 'aZ5EsdnpLMI?si=y1A2K8LVNNjWcGif',
        title: 'Title 2',
        description: 'Description for Card 2',
    },
    {
        id: 3,
        videoId: 'aZ5EsdnpLMI?si=y1A2K8LVNNjWcGif',
        title: 'Title 3',
        description: 'Description for Card 3',
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
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
}

function Capability() {
    return (
        <div className='bg-bgLight py-3 mt-[2rem] shadow-md' style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
            <div className='flex flex-col items-center mt-[1rem] mb-[2rem]'>
                <div className='border border-homeBg rounded-2xl px-2 py-1 mb-3 hover:bg-homeBg'>
                    <p className='text-homeBg hover:text-white'>Our Capabilities</p>
                </div>
                <p className='text-lg font-[500] py-1 mb-4'>Unlocking limitless possibilities through cutting-edge artificial intelligence solutions</p>
                <div className="flex flex-wrap justify-center">
                    {cardsData.map(card => (
                        <div key={card.id} className="m-4">
                            <Card {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Capability;