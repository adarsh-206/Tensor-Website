import React from 'react';
import AboutBg from '../../assests/aboutbg3.png'
import blogData from './BlogData';
import { Link } from 'react-router-dom';

function Blog() {
    return (
        <div>
            <div className='flex justify-around items-center p-2 bg-homeBg bg-home-png'>
                <div className='text-white'>
                    <p className='text-white font-bold about-text'>Blogs</p>
                    <p className='my-3'>Home / Pages / Blog</p>
                </div>
                <div className='relative p-3 my-2'>
                    <img src={AboutBg} alt="about" width="130" height="130" />
                    <div className="absolute inset-0 bg-homeBg opacity-20 rounded-lg"></div>
                </div>
            </div>
            <div className='px-5 py-3 my-[2rem]'>
                <div>
                    <p className='text-2xl font-bold text-center mb-[2rem]'>Explore our recent writings</p>
                </div>
                <div className='cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 m-5'>
                    {blogData.map((blog, index) => (
                        <div key={index} className="relative bg-gray-300 rounded-lg overflow-hidden shadow-lg h-[70vh] flex flex-col justify-end">
                            <img className="absolute inset-0 w-full h-full object-cover" src={blog.image} alt="Background" style={{ transition: 'transform 0.3s', ':hover': { transform: 'scale(1.1)' } }} />
                            <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(20, 24, 62, 0), #0e112b)' }}></div>
                            <div className="relative p-4">
                                <div className="inline-block bg-black px-2 py-1 rounded-xl">
                                    <h2 className="text-[0.7rem] text-white">{blog.category}</h2>
                                </div>
                                <p className="text-xl text-white mt-2 font-semibold">{blog.title}</p>
                                <div className="inline-block rounded-full overflow-hidden bg-homeBg mt-4 group hover:bg-white">
                                    <Link to={`/blogs/${blog.id}`} className="block text-white p-2">
                                        <svg className="h-5 w-5 text-white group-hover:text-homeBg transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;