import React from 'react';
import quote from '../../assests/quote.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="prev-arrow flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200 cursor-pointer" onClick={onClick}>
            <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="next-arrow flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200 cursor-pointer" onClick={onClick}>
            <svg className="h-4 w-4 text-gray-600 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        </div>
    );
};

function Testimonials() {
    const testimonials = [
        { id: 1, name: 'Alice Johnson', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://randomuser.me/api/portraits/women/32.jpg' },
        { id: 2, name: 'Bob Brown', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { id: 3, name: 'Charlie Smith', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: 'https://randomuser.me/api/portraits/men/33.jpg' },
        { id: 4, name: 'David Wilson', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://randomuser.me/api/portraits/men/34.jpg' }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    return (
        <div className='px-3 py-5 my-[3rem]'>
            <div className='flex justify-center items-center my-2'>
                <div className='border border-homeBg rounded-2xl px-2 py-1 mb-3 hover:bg-homeBg'>
                    <p className='text-homeBg text-center hover:text-white'>Testimonials</p>
                </div>
            </div>
            <p className='text-lg text-center font-[500] py-1 mb-6'>Discover why our clients love us – testimonials that speak volumes.</p>
            <Slider {...settings}>
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2'>
                        <div className='rounded-lg overflow-hidden bg-bgLight shadow-md'>
                            <div className='p-4'>
                                <div className='mb-4'>
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
                ))}
            </Slider>
        </div>
    );
}

export default Testimonials;