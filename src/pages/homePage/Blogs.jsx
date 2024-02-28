import React from 'react';
import blogData from '../../pages/Blogs/BlogData';

function Blog() {
    const blogs = blogData.slice(0, 3);

    return (
        <div className='px-3 py-5 bg-bgLight mt-[2rem]'>
            <div className='flex justify-center items-center my-2'>
                <div className='border border-homeBg rounded-2xl px-2 py-1 mb-3 hover:bg-homeBg'>
                    <p className='text-homeBg text-center hover:text-white'>Recent Blogs</p>
                </div>
            </div>
            <p className='text-lg text-center font-[500] py-1 mb-8'>Explore insightful perspectives and industry trends with our latest blog posts.</p>
            <div className='flex flex-wrap justify-center space-x-8'>
                {blogs.map(blog => (
                    <div key={blog.id} className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2 flex justify-center'>
                        <div className='bg-white rounded-lg shadow-lg overflow-hidden h-full'>
                            <img src={blog.image} alt={blog.title} className='w-full h-40 object-cover' />
                            <div className='p-4'>
                                <h3 className='text-[1rem] font-semibold mb-2'>{blog.title}</h3>
                                <div className='flex justify-between text-[0.8rem] pt-4'>
                                    <p className='text-gray-600'>{blog.author}</p>
                                    <p className='text-gray-600'>{blog.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className='flex items-center justify-center mt-4'>
                <div className='rounded-full bg-transparent p-2 border border-homeBg'>
                    <Link to="/blogs">
                        <p className='text-homeBg text-[0.7rem]'>Read More</p>
                    </Link>
                </div>
            </div> */}
        </div >
    );
}

export default Blog;