import React, { useState, useEffect, useRef } from 'react'
import AboutIcon from '../../assests/services.png'
import analytics from '../../assests/analytics.png'
import automation from '../../assests/automation.png'
import dataProcessing from '../../assests/data-processing.png'
import cyberEye from '../../assests/cyber-eye.png'
import webdev from '../../assests/app-dev.png'
import virtualreality from '../../assests/virtual-reality.png'
import Customers from './Customers'

function Services() {

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
        <div>
            <div className='flex flex-col items-center mt-[3rem] mb-[1rem]'>
                <div className='border border-homeBg rounded-2xl px-2 py-1 mb-3 hover:bg-homeBg'>
                    <p className='text-homeBg hover:text-white'>Our Services</p>
                </div>
                <p className='section-heading'>We Transform Your Business with Our Cutting-Edge Tools for Smarter Solutions.</p>
            </div>
            <div className='flex justify-center items-center space-x-8 m-[3rem]'>
                <div ref={componentRef} className={`flex flex-col flex-1 ${isVisible ? 'slide-in-left' : ''}`}>
                    <div className="flex flex-col bg-bgLight p-3 rounded-lg shadow-md ">
                        <div className='flex space-x-5'>
                            <div>
                                <img src={analytics} alt='analytics' height="180" width="180" />
                            </div>
                            <div>
                                <p className='font-semibold text-lg mb-1'>Advanced Data Analytics</p>
                                <p className='text-gray-700 text-[0.9rem]'>
                                    Harness the power of data to gain actionable insights, make informed decisions, and drive business growth with our advanced analytics solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-5">
                        <div className='flex space-x-5 bg-bgLight p-3 rounded-lg shadow-md'>
                            <div>
                                <img src={automation} alt='analytics' height="180" width="180" />
                            </div>
                            <div>
                                <p className='font-semibold text-lg mb-1'>Intelligent Automation</p>
                                <p className='text-gray-700 text-[0.9rem]'>
                                    Streamline processes, increase efficiency, and reduce operational costs by implementing intelligent automation solutions that leverage AI & ML technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className='flex space-x-5 bg-bgLight p-3 rounded-lg shadow-md'>
                            <div>
                                <img src={webdev} alt='analytics' height="180" width="180" />
                            </div>
                            <div>
                                <p className='font-semibold text-lg mb-1'>Web & App Development</p>
                                <p className='text-gray-700 text-[0.9rem]'>
                                    Refine your digital presence with custom web and app dev. We specialize in dynamic websites and mobile apps, tailoring solutions to engage your audience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center flex-1'>
                    <img src={AboutIcon} alt='About' height="250" width="250" />
                </div>
                <div ref={componentRef} className={`flex flex-col flex-1 ${isVisible ? 'slide-in-right' : ''}`}>
                    <div className="flex flex-col">
                        <div className='flex space-x-5 bg-bgLight p-3 rounded-lg shadow-md'>
                            <div>
                                <img src={dataProcessing} alt='analytics' height="180" width="180" />
                            </div>
                            <div>
                                <p className='font-semibold text-lg mb-1'>Natural Language Processing</p>
                                <p className='text-gray-700 text-[0.9rem]'>
                                    Enhance user experiences, automate text analysis, and extract valuable insights from unstructured data using our natural language processing capabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-5">
                        <div className='flex space-x-5 bg-bgLight p-3 rounded-lg shadow-md'>
                            <div>
                                <img src={cyberEye} alt='analytics' height="180" width="180" />
                            </div>
                            <div>
                                <p className='font-semibold text-lg mb-1'>Computer Vision Technology</p>
                                <p className='text-gray-700 text-[0.9rem]'>
                                    Revolutionize industries, improve safety, and optimize workflows with our computer vision technology, enabling machines to interpret and understand visual information like never before.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className='flex space-x-5 bg-bgLight p-3 rounded-lg shadow-md'>
                            <div>
                                <img src={virtualreality} alt='analytics' height="180" width="180" />
                            </div>
                            <div>
                                <p className='font-semibold text-lg mb-1'>Virtual Reality Experiences</p>
                                <p className='text-gray-700 text-[0.9rem]'>
                                    Immerse your audience in captivating virtual worlds with our cutting-edge VR solutions. From interactive simulations to immersive storytelling, we push the boundaries of imagination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Customers />
        </div>
    )
}

export default Services