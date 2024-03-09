import React from 'react'
import xaiBot from '../../assests/xai-bot.png'

function XaiBot() {

    return (
        <div>
            <div className='flex justify-around items-center p-2 bg-homeBg bg-home-png'>
                <div className='text-white'>
                    <p className='text-white font-bold about-text'>Xai Bot</p>
                    <p className='my-3'>Home / Products / Xai-Bot</p>
                </div>
                <div className='relative p-3 my-2'>
                    <img src={xaiBot} alt="icon" width="100" height="100" />
                    <div className="absolute inset-0 bg-homeBg opacity-20 rounded-lg"></div>
                </div>
            </div>
            <div className='flex justify-center my-[3rem]'>
                <p className='text-2xl font-bold'>Revolutionizing Retail Customer Engagement with LLM-Powered Chatbots</p>
            </div>
            <div className='flex justify-around items-center my-8'>
                <div className='w-[60%]'>
                    <p style={{ lineHeight: '1.6' }}>
                        Introducing our groundbreaking chatbot, meticulously crafted using Large Language Models (LLMs) trained on both retail domain data and comprehensive world knowledge! Seamlessly blending advanced natural language understanding with a deep understanding of retail dynamics, our chatbot is poised to redefine customer interactions in the retail landscape.
                    </p>
                    <p style={{ lineHeight: '1.6' }} className='my-5'>
                        Whether it's assisting shoppers with product inquiries, providing personalized recommendations, or addressing customer service queries, our chatbot leverages its extensive training to deliver accurate, timely, and contextually relevant responses.
                    </p>
                    <p style={{ lineHeight: '1.6' }}>
                        Join us as we embark on a journey to explore the transformative potential of our LLM-powered chatbot in enhancing customer engagement, streamlining operations, and driving business success in the retail industry. Welcome to the future of retail experiences, where intelligent AI meets unparalleled domain expertise!
                    </p>
                </div>
                <div>
                    <iframe
                        width="420"
                        height="280"
                        className='rounded-lg shadow-lg'
                        src="https://www.youtube.com/embed/Kn3LcfzCs1Q?si=GatWZpPz4vEyMojE"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default XaiBot