import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 90) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`sticky top-0 z-10 flex justify-between items-center p-3 bg-homeBg ${scrolling ? 'shadow-lg' : ''}`}>
            <div className='text-white font-sans font-bold logo'>
                <Link to="/">Tensor</Link>
            </div>
            <div className='flex space-x-4 text-navText font-[500]'>
                <Link to="/" className={`hover:text-white ${location.pathname === '/' ? 'text-white' : ''}`}>Home</Link>
                <Link to="/about" className={`hover:text-white ${location.pathname === '/about' ? 'text-white' : ''}`}>About us</Link>
                <Link to="/products" className={`hover:text-white ${location.pathname === '/products' ? 'text-white' : ''}`}>Products</Link>
                <Link to="/blogs" className={`hover:text-white ${location.pathname === '/blogs' ? 'text-white' : ''}`}>Blogs</Link>
                <Link to="/contact" className={`hover:text-white ${location.pathname === '/contact' ? 'text-white' : ''}`}>Contact Us</Link>
            </div>
        </div>
    );
}

export default Navbar;