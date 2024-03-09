import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineArrowDropDown } from "react-icons/md";

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNestedDropdown, setShowNestedDropdown] = useState(false);
    const [nestedDropdownContent, setNestedDropdownContent] = useState([]);
    const location = useLocation();
    const dropdownRef = useRef(null);
    const nestedDropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 90);
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

    const handleNestedDropdownEnter = () => {
        setShowNestedDropdown(true);
    };

    const handleNestedDropdownLeave = () => {
        setShowNestedDropdown(false);
    };

    const handleDropdownHover = (content) => {
        setNestedDropdownContent(content);
        setShowNestedDropdown(true);
    };

    return (
        <div className={`sticky top-0 z-10 flex justify-between items-center p-3 bg-homeBg ${scrolling ? 'shadow-lg' : ''}`}>
            <div className='text-white font-sans font-bold logo'>
                <Link to="/">Tensor</Link>
            </div>
            <div className='flex space-x-4 text-navText font-[500] relative'>
                <Link to="/" className={`hover:text-white ${location.pathname === '/' ? 'text-white' : ''}`}>Home</Link>
                <Link to="/about" className={`hover:text-white ${location.pathname === '/about' ? 'text-white' : ''}`}>About us</Link>
                <div className="relative" ref={dropdownRef} onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
                    <button className={`hover:text-white focus:outline-none ${location.pathname.startsWith('/products') ? 'text-white' : ''}`}>
                        <div className='flex justify-center items-center'>
                            <p>Products</p>
                            <MdOutlineArrowDropDown />
                        </div>
                    </button>
                    {showDropdown && (
                        <div className="absolute top-full bg-white shadow-lg w-32" onMouseEnter={handleNestedDropdownEnter} onMouseLeave={handleNestedDropdownLeave}>
                            <div className='bg-gray-100 flex flex-col justify-center'>
                                <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-bgLight rounded" onMouseEnter={() => handleDropdownHover(["Bhashantar"])}>
                                    Tensor AI
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-bgLight rounded" onMouseEnter={() => handleDropdownHover(["Xai Bot"])}>
                                    Tensor LLM
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-bgLight rounded" onMouseEnter={() => handleDropdownHover(["Smurfur"])}>
                                    Tensor Play
                                </button>
                            </div>
                            {showNestedDropdown && (
                                <div className="absolute top-0 left-full mt-0 bg-white w-28 h-full" ref={nestedDropdownRef}>
                                    {nestedDropdownContent.map((item, index) => (
                                        <Link key={index} to={`/products/${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 text-sm text-gray-800 hover:bg-bgLight rounded">{item}</Link>
                                    ))}
                                </div>
                            )}
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