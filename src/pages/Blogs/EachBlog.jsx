import React from 'react';
import { useParams } from 'react-router-dom';
import BlogData from './BlogData';

function EachBlog() {
    const params = useParams();
    const blog = BlogData.find(item => item.id === parseInt(params.id));

    if (!blog) {
        return <div>Blog not found</div>;
    }

    const { title, content, author, date, category, image } = blog;

    return (
        <div className='mt-[3rem] w-[70%] mx-auto'>
            <div className='relative'>
                <img className='rounded-lg h-64 w-full' src={image} alt='blog post' />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
                    {/* <p className="text-3xl text-center font-bold">{title}</p>
                    <div className='flex justify-center space-x-8 text-sm py-4'>
                        <p>{author}</p>
                        <p>|</p>
                        <p>{date}</p>
                        <p>|</p>
                        <p>{category}</p>
                    </div> */}
                </div>
            </div>
            <p className='text-center text-2xl font-bold mt-5'>{title}</p>
            <div className='flex justify-center space-x-8 text-gray-500 text-sm py-4'>
                <p>{author}</p>
                <p>|</p>
                <p>{date}</p>
                <p>|</p>
                <p>{category}</p>
            </div>
            <div className='mt-5'>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}

export default EachBlog;