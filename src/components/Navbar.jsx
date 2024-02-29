import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
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

    const handleDropdownEnter = () => {
        setShowDropdown(true);
    };

    const handleDropdownLeave = () => {
        setShowDropdown(false);
    };

    return (
        <div className={`sticky top-0 z-10 flex justify-between items-center p-3 bg-homeBg ${scrolling ? 'shadow-lg' : ''}`}>
            <div className='text-white font-sans font-bold logo'>
                <Link to="/">Tensor</Link>
            </div>
            <div className='flex space-x-4 text-navText font-[500] relative'>
                <Link to="/" className={`hover:text-white ${location.pathname === '/' ? 'text-white' : ''}`}>Home</Link>
                <Link to="/about" className={`hover:text-white ${location.pathname === '/about' ? 'text-white' : ''}`}>About us</Link>
                <div
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                >
                    <button
                        className={`hover:text-white focus:outline-none ${location.pathname.startsWith('/products') ? 'text-white' : ''}`}
                    >
                        Products
                    </button>
                    {showDropdown && (
                        <div className="absolute top-full mt-2 bg-white shadow-lg rounded">
                            <Link to="/products/category1" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Bhashantar</Link>
                            <Link to="/products/category2" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Bhashantar</Link>
                        </div>
                    )}
                </div>
                <Link to="/blogs" className={`hover:text-white ${location.pathname === '/blogs' ? 'text-white' : ''}`}>Blogs</Link>
                <Link to="/contact" className={`hover:text-white ${location.pathname === '/contact' ? 'text-white' : ''}`}>Contact Us</Link>
            </div>
        </div>
    );
}

export default Navbar;