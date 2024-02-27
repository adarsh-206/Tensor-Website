import React from 'react';
import blogData from './Blogs/BlogData';

function Blog() {
    // Sample blog data
    const blogs = [
        { id: 1, title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', date: 'January 1, 2024', image: 'https://pixelplex.io/wp-content/uploads/2024/01/llm-applications-main.jpg' },
        { id: 2, title: 'Dolor Sit Amet', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', date: 'February 15, 2024', image: 'https://miro.medium.com/v2/resize:fit:1200/1*cG6U1qstYDijh9bPL42e-Q.jpeg' },
        { id: 3, title: 'Consectetur Adipiscing', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: 'March 10, 2024', image: 'https://www.consultantsreview.com/newstransfer/upload/289jpXiaomi-VR.jpg' },
        { id: 4, title: 'Sed Do Eiusmod', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', date: 'April 22, 2024', image: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png' }
    ];

    return (
        <div className='px-3 py-5 bg-bgLight mt-[2rem]'>
            <div className='flex justify-center items-center my-2'>
                <div className='border border-homeBg rounded-2xl px-2 py-1 mb-3 hover:bg-homeBg'>
                    <p className='text-homeBg text-center hover:text-white'>Blogs</p>
                </div>
            </div>
            <div className='flex flex-wrap justify-center space-x-8'>
                {blogData.map(blog => (
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
        </div>
    );
}

export default Blog;