import React from 'react'
import team from '../../assests/team.png'
import AboutPara1 from '../../assests/aboutpara1.webp'
import values1 from '../../assests/values-1.png'
import values2 from '../../assests/values-2.png'
import values3 from '../../assests/values-3.png'
import values4 from '../../assests/values-4.png'
import whywe1 from '../../assests/whywe4.webp'
import Customers from '../homePage/Customers'

function About() {
    return (
        <div>
            <div className='flex justify-around items-center p-2 bg-homeBg bg-home-png'>
                <div className='text-white'>
                    <p className='text-white font-bold about-text'>About Us</p>
                    <p className='my-3'>Home / Pages / About Us</p>
                </div>
                <div className='relative p-3'>
                    <img src={team} alt="icon" width="130" height="130" />
                    <div className="absolute inset-0 bg-homeBg opacity-20 rounded-lg"></div>
                </div>
            </div>

            <div className='flex justify-around mt-[3rem]'>
                <div className='w-[50%]'>
                    <p className='font-bold text-xl mb-4'>About the company</p>
                    <p className='text-gray-700 text-sm'>Welcome to Tensor Solution Tech Private Limited, our premier destination for cutting-edge technology
                        solutions in machine learning (ML), artificial intelligence (AI),
                        website development, app development, augmented reality (AR), and virtual reality (VR).
                    </p>
                    <p className='text-gray-700 text-sm my-6'>
                        At Tensor, we specialize in harnessing the power of advanced technologies to empower businesses
                        and individuals alike. With a team of skilled professionals and a commitment to innovation,
                        we deliver tailor-made solutions that drive growth, efficiency, and success.
                    </p>
                    <p className='text-gray-700 text-sm'>
                        Explore our website to learn more about our services, browse our portfolio, and
                        discover how Tensor can help you unlock the full potential of technology for your business.
                        Contact us today to start your journey towards digital transformation and success.
                        Welcome to the future of technology with Tensor.
                    </p>
                </div>
                <div className='relative'>
                    <img className='rounded-lg' src={AboutPara1} alt='about para 1' height="420" width="470" />
                    <div className="absolute inset-0 bg-homeBg opacity-20 rounded-lg"></div>
                </div>
            </div>

            <div className='mr-5 mt-[4rem]'>
                <p className='font-bold text-xl mb-8 ml-[3rem] text-center'>Our Values</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ml-[3rem]">
                    <div className="bg-bgLight rounded-lg p-4 flex flex-col justify-center items-center shadow-lg">
                        <img className='my-5' src={values1} alt="value1" width="80" height="80" />
                        <p className="font-bold text-lg mb-2">Expertise in Innovation</p>
                        <p className="text-sm text-center">We leverage ML and AI to empower businesses with valuable insights and innovative solutions, driving transformation.</p>
                    </div>
                    <div className="bg-bgLight rounded-lg p-4 flex flex-col justify-center items-center shadow-lg">
                        <img className='my-5' src={values2} alt="value2" width="90" height="90" />
                        <p className="font-bold text-lg mb-2">Commitment to Excellence</p>
                        <p className="text-sm text-center">Dedicated to excellence, we collaborate closely with clients to surpass expectations, delivering results that exceed industry standards.</p>
                    </div>
                    <div className="bg-bgLight rounded-lg p-4 flex flex-col justify-center items-center shadow-lg">
                        <img className='my-5' src={values3} alt="value3" width="90" height="90" />
                        <p className="font-bold text-lg mb-2">Creative Digital Solutions</p>
                        <p className="text-sm text-center">We blend creativity, functionality, and UX in tech-driven web and app development, bringing ideas to life with tangible results.</p>
                    </div>
                    <div className="bg-bgLight rounded-lg p-4 flex flex-col justify-center items-center shadow-lg">
                        <img className='my-5' src={values4} alt="value4" width="90" height="90" />
                        <p className="font-bold text-lg mb-2">Immersive Experiences</p>
                        <p className="text-sm">Using AR and VR, we create immersive experiences for product showcasing, training, and entertainment, unlocking endless innovation.</p>
                    </div>
                </div>
            </div>

            <div className='mr-5 mt-[4rem]'>
                <p className='font-bold text-xl mb-8 text-center'>Why we?</p>
                <div className='flex justify-around items-center'>
                    <div className='w-[52%] text-sm'>
                        <p className='leading-relaxed'>Our expertise in ML and AI enables us to unlock valuable insights from data, automate processes, and create intelligent systems that revolutionize businesses across industries. We are specialized in delivering projects related to Large Language Models (LLMs) and RAG pipeline harnessing world knowledge to retrieve information for chatbots. We have also delivered projects powered under AI / ML capabilities such as Indic Language translation, transliteration, OCR, Image Search, Retail Product Catalog Search and much more.</p>
                        <p className='leading-relaxed my-4'>With our AR and VR solutions, we break the boundaries of reality and offer immersive experiences that engage, entertain, and inspire. Whether you're exploring new ways to showcase products, train employees, or entertain audiences, our AR and VR solutions provide endless possibilities for innovation and creativity.</p>
                        <p className='leading-relaxed'>At Tensor, we are committed to excellence in every project we undertake. We work closely with our clients to understand their goals, challenges, and vision, and we strive to exceed their expectations at every turn. From concept to execution, we are your trusted partner in technology innovation.</p>
                    </div>
                    <div className='w-[39%] relative'>
                        <img className='rounded-lg' src={whywe1} alt='why we 1' />
                        <div className="absolute inset-0 bg-homeBg opacity-20 rounded-lg"></div>
                    </div>
                </div>
            </div>
            <div className='mt-[4rem]'>
                <p className='font-bold text-xl mb-8 text-center'>Our Clients</p>
                <Customers />
            </div>
        </div>
    )
}

export default About