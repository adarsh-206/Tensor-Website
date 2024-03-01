import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineArrowDropDown } from "react-icons/md";

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 90) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className={`sticky top-0 z-10 flex justify-between items-center p-3 bg-homeBg ${scrolling ? 'shadow-lg' : ''}`}>
            <div className='text-white font-sans font-bold logo'>
                <Link to="/">Tensor</Link>
            </div>
            <div className='flex space-x-4 text-navText font-[500] relative'>
                <Link to="/" className={`hover:text-white ${location.pathname === '/' ? 'text-white' : ''}`}>Home</Link>
                <Link to="/about" className={`hover:text-white ${location.pathname === '/about' ? 'text-white' : ''}`}>About us</Link>
                <div className="relative" ref={dropdownRef}>
                    <button onClick={toggleDropdown} className={`hover:text-white focus:outline-none ${location.pathname.startsWith('/products') ? 'text-white' : ''}`}>
                        <div className='flex justify-center items-center'>
                            <p>Products</p>
                            <MdOutlineArrowDropDown />
                        </div>
                    </button>
                    {showDropdown && (
                        <div className="absolute top-full mt-2 bg-white shadow-lg rounded">
                            <Link to="/products/bhashantar" className="block px-4 py-2 text-sm text-gray-800 hover:bg-bgLight rounded">Bhashantar</Link>
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