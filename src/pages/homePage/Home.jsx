import React, { useState, useEffect, useRef } from 'react'
import HomeIcon from '../../assests/home-icon2.png'
import { TypeAnimation } from 'react-type-animation'

function Home() {
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
        <div className='flex justify-center items-center p-2 bg-homeBg bg-home-png gap-5 shadow-lg'>
            <div ref={componentRef} className={`text-white w-[50%] font-bold home-text ${isVisible ? 'slide-in-left' : ''}`}>
                <TypeAnimation
                    sequence={[
                        'Transforming Tomorrow with Innovative Solutions in ML, AI, Web & App Development, AR, and VR',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <div className={`${isVisible ? 'slide-in-right' : ''}`}>
                <img src={HomeIcon} alt="icon" width="488" height="545" />
            </div>
        </div>
    )
}

export default Home