import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex justify-between items-center p-3 bg-homeBg'>
            <div className='text-white font-sans font-bold logo'>
                <Link to="/">Tensor</Link>
            </div>
            <div className='flex space-x-4 text-navText'>
                <Link to="/" className="hover:text-white">Home</Link>
                <Link to="/about" className="hover:text-white">About us</Link>
                <Link to="/blogs" className="hover:text-white">Blogs</Link>
                <Link to="/contact" className="hover:text-white">Contact Us</Link>
            </div>
        </div>
    )
}

export default Navbar