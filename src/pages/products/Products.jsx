import React, { useState } from 'react'
import AboutBg from '../../assests/aboutbg3.png'
import products from './ProductData';

function ProductBox({ product }) {
    const [expanded, setExpanded] = useState(false);
    const toggleExpandedText = expanded ? 'Read Less' : 'Read More';

    const truncatedDescription = (description) => {
        const maxLength = 210;
        return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
    };

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`border rounded-lg p-4 shadow-md ${expanded ? 'h-auto' : 'h-[350px] overflow-hidden'}`}>
            <div className="relative w-full h-48 mb-4">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full rounded-lg" />
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p
                className={`text-sm ${expanded ? 'block' : 'truncate'}`}
                dangerouslySetInnerHTML={{ __html: expanded ? product.description : truncatedDescription(product.description) }}
            ></p>
            <button onClick={toggleExpanded} className="mt-4 bg-homeBg hover:bg-blue-500 text-[0.7rem] text-white py-1 px-2 rounded-md hover:bg-blue-600 transition duration-300">
                {toggleExpandedText}
            </button>
        </div>
    );
}

function Products() {
    return (
        <div>
            <div className='flex justify-around items-center p-2 bg-homeBg bg-home-png'>
                <div className='text-white'>
                    <p className='text-white font-bold about-text'>Products</p>
                    <p className='my-3'>Home / Pages / Product</p>
                </div>
                <div className='p-3'>
                    <img src={AboutBg} alt="icon" width="130" height="130" />
                </div>
            </div>
            <div className='flex justify-center items-center mt-[3rem]'>
                <p className='text-xl font-bold'>Discover our innovative products designed to elevate your experience</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 p-8">
                {products.map((product) => (
                    <ProductBox key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products