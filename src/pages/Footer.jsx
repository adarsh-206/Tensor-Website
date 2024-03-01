import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SocialMediaIcons() {
    return (
        <div className="flex items-center space-x-4">
            <SocialMediaIcon icon={<FaFacebookF />} link="#" />
            <SocialMediaIcon icon={<FaTwitter />} link="#" />
            <SocialMediaIcon icon={<FaInstagram />} link="#" />
            <SocialMediaIcon icon={<FaLinkedinIn />} link="#" />
        </div>
    );
}

function SocialMediaIcon({ icon, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block p-2 bg-white text-homeBg hover:bg-blue-500 hover:text-white rounded-full transition duration-300">
            {icon}
        </a>
    );
}

function Footer() {
    return (
        <footer className="bg-homeBg text-white py-8 mt-[5rem]">
            <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
                <div className="mb-4 md:mb-0 md:flex-grow-0 md:w-1/3 mr-[5rem]">
                    <h2 className="text-xl font-bold mb-2">Tensor</h2>
                    <p className="text-sm">We deeply understand our clients' challenges and offer progressive technological solutions through incremental implementation for swift benefits.</p>
                    <p className="text-[1rem] mt-4">tensor.solutiontech@gmail.com</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:flex-grow">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">What we do</h3>
                        <ul className="text-sm">
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Who we are</h3>
                        <ul className="text-sm">
                            <li className='mb-2'><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Products</h3>
                        <ul className="text-sm">
                            <li><Link to="/products/bhashantar">Bhashantar</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Follow us</h3>
                        <SocialMediaIcons />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-[3rem] space-x-2'>
                <p className='text-[0.8rem]'>© 2024 Tensor Solutions Tech Pvt Ltd.</p>
                <p className='text-[0.8rem]'>All Rights Reserved. Privacy policy</p>
            </div>
        </footer>
    )
}

export default Footer;