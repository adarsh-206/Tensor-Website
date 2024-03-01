import React, { useState, useEffect, useRef } from 'react';
import blogData from '../../pages/Blogs/BlogData';
import { Link } from 'react-router-dom';

function Blog() {
    const blogs = blogData.slice(0, 3);
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(componentRef.current);

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    useEffect(() => {
        setIsVisible(false);
    }, [componentRef]);

    return (
        <div className='px-3 py-[3rem] bg-bgLight mt-[2rem]' style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
            <div className='flex justify-center items-center my-2'>
                <div className='border border-homeBg rounded-2xl px-2 py-1 mb-3 hover:bg-homeBg'>
                    <p className='text-homeBg text-center hover:text-white'>Recent Blogs</p>
                </div>
            </div>
            <p className='text-lg text-center font-[500] py-1 mb-8'>Explore insightful perspectives and industry trends with our latest blog posts.</p>
            <div className='flex flex-wrap justify-center space-x-8'>
                {blogs.map(blog => (
                    <div key={blog.id} className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2 flex justify-center'>
                        <div ref={componentRef} className={`bg-white rounded-lg shadow-lg overflow-hidden h-full ${isVisible ? 'slide-in-right' : ''}`}>
                            <img src={blog.image} alt={blog.title} className='w-full h-40 object-cover' />
                            <div className='p-4 flex flex-col'>
                                <div className=''>
                                    <Link to={`/blogs/${blog.id}`}>
                                        <h3 className='text-[1rem] font-semibold mb-2 h-20'>{blog.title}</h3>
                                    </Link>
                                </div>
                                <div className='flex justify-between text-[0.8rem] pt-4'>
                                    <p className='text-gray-600'>{blog.author}</p>
                                    <p className='text-gray-600'>{blog.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center mt-4'>
                <div className='rounded-lg p-2 border border-homeBg bg-homeBg hover:bg-transparent'>
                    <Link to="/blogs">
                        <p className='text-white hover:text-homeBg text-[0.7rem]'>Read More Blogs</p>
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default Blog;