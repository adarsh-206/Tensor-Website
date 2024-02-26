import React from 'react'
import AboutBg from '../../assests/aboutbg3.png'

function About() {
    return (
        <div>
            <div className='flex justify-around items-center p-2 bg-homeBg bg-home-png'>
                <div className='text-white'>
                    <p className='text-white font-bold about-text'>About Us</p>
                    <p className='my-3'>Home / Pages / About Us</p>
                </div>
                <div className='p-3'>
                    <img src={AboutBg} alt="icon" width="130" height="130" />
                </div>
            </div>
            <div className='px-5 py-3 my-[2rem]'>
                <div>
                    <p className='text-xl font-bold text-center'>Empowering Futures: Our Tech Solutions</p>
                    <p className='mt-8'>
                        Welcome to Tensor Solution Tech Private Limited, our premier destination for cutting-edge
                        technology solutions in machine learning (ML), artificial intelligence (AI),
                        website development, app development, augmented reality (AR), and virtual reality (VR).
                    </p>
                    <p className='mt-8'>
                        At <span className='font-semibold'>Tensor</span>, we specialize in harnessing the power of advanced technologies to
                        empower businesses and individuals alike. With a team of skilled professionals and a commitment to innovation,
                        we deliver tailor-made solutions that drive growth, efficiency, and success.
                    </p>
                    <p className='mt-8'>
                        Our expertise in ML and AI enables us to unlock valuable insights from data,
                        automate processes, and create intelligent systems that revolutionize businesses across industries.
                        We are specialized in delivering projects related to Large Language Models (LLMs) and RAG pipeline harnessing world knowledge to retrieve information for chatbots. We have also delivered projects powered under AI / ML capabilities such as Indic Language translation, transliteration, OCR,
                        Image Search, Retail Product Catalog Search and much more.
                    </p>
                    <p className='mt-8'>
                        In the realm of web and app development, we combine creativity, functionality,
                        and user experience to craft engaging digital experiences that captivate audiences and deliver tangible results. From responsive websites to intuitive mobile applications,
                        we leverage the latest technologies and best practices to bring your ideas to life.
                    </p>
                    <p className='mt-8'>
                        With our AR and VR solutions, we break the boundaries of reality and offer immersive
                        experiences that engage, entertain, and inspire. Whether you're exploring new ways to showcase products, train employees, or entertain audiences,
                        our AR and VR solutions provide endless possibilities for innovation and creativity.
                    </p>
                    <p className='mt-8'>
                        At Tensor, we are committed to excellence in every project we undertake. We work closely
                        with our clients to understand their goals, challenges, and vision, and we strive to exceed their
                        expectations at every turn.
                        From concept to execution, we are your trusted partner in technology innovation.
                    </p>
                    <p className='mt-8'>
                        Explore our website to learn more about our services, browse our portfolio, and
                        discover how Tensor can help you unlock the full potential of technology for your business.
                        Contact us today to start your journey towards digital transformation and success.
                        Welcome to the future of technology with Tensor.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About