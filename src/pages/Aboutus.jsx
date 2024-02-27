import React from 'react'
import AboutUsIcon from '../assests/about-svg2.svg'
import Customers from './Customers'

function Aboutus() {
    return (
        <div>
            <div className='flex justify-center items-center space-x-8'>
                <div className='mt-[9rem]'>
                    <img src={AboutUsIcon} alt="About us" height="300" width="500" />
                </div>
                <div className='w-[50%] text-smallText'>
                    <div className='flex flex-col items-center mt-[3rem] mb-[1rem]'>
                        <div className='border border-homeBg rounded-2xl px-2 py-1 mb-3 hover:bg-homeBg'>
                            <p className='text-homeBg hover:text-white'>About Us</p>
                        </div>
                        <p className='section-heading'>We Transform Your Business with Our Cutting-Edge Tools for Smarter Solutions.</p>
                    </div>
                    <p>Welcome to Tensor Solution Tech Private Limited,
                        our premier destination for cutting-edge technology
                        solutions in machine learning (ML), artificial intelligence (AI),
                        website development, app development, augmented reality (AR),
                        and virtual reality (VR).
                    </p>
                    <p className='my-5'></p>
                    <p>
                        At Tensor, we specialize in harnessing the power of advanced technologies
                        to empower businesses and individuals alike.
                        With a team of skilled professionals and a commitment to innovation,
                        we deliver tailor-made solutions that drive growth, efficiency, and success.
                    </p>
                    <p className='my-5'></p>
                    <p>
                        With our AR and VR solutions, we break the boundaries of reality and offer
                        immersive experiences that engage, entertain, and inspire.
                        Whether you're exploring new ways to showcase products, train employees, or entertain audiences,
                        our AR and VR solutions provide endless possibilities for innovation and creativity.
                    </p>
                </div>
            </div>
            <Customers />
        </div>
    )
}

export default Aboutus