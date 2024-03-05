import React from 'react'
import { useState } from 'react';
import quote from '../../assests/quote.png'

const Card = (props) => {
    let testimonial = props.review;
    return (
        <div key={testimonial.id} className='w-full'>
            <div className='rounded-lg overflow-hidden bg-bgLight shadow-md'>
                <div className='p-4'>
                    <div className='mb-4' style={{ minHeight: '150px' }}>
                        <p className='text-gray-800'><img src={quote} className='text-gray-400 text-2xl mr-2' alt="quote" />{testimonial.text}</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <img src={testimonial.image} alt={testimonial.name} className='w-10 h-10 rounded-full' />
                        </div>
                        <div className='ml-3'>
                            <p className='text-gray-800 font-semibold'>{testimonial.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }

    }

    return (
        <div className='mt-[4rem]'>
            <div className='flex justify-center items-center my-2'>
                <div className='border border-homeBg rounded-2xl px-2 py-1 mb-3 hover:bg-homeBg'>
                    <p className='text-homeBg text-center hover:text-white'>Testimonials</p>
                </div>
            </div>
            <p className='text-lg text-center font-[500] py-1 mb-6'>Discover why our clients love us – testimonials that speak volumes.</p>
            <div className='flex justify-center items-center mt-[2rem]'>
                <div className='w-1/2 bg-white flex flex-col justify-center items-center'>

                    <Card review={reviews[index]}></Card>


                    <div className='flex justify-center mt-10 space-x-4'>
                        <div className="flex items-center justify-center rounded-full border border-gray-400 hover:bg-homeBg cursor-pointer p-1 group" onClick={leftShiftHandler}>
                            <svg className="h-6 w-6 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-center rounded-full border border-gray-400 hover:bg-homeBg cursor-pointer p-1 group" onClick={rightShiftHandler}>
                            <svg className="h-6 w-6 text-gray-600 transform rotate-180 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
