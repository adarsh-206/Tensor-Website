import React from 'react'
import translate from '../../assests/translate.png'
import bhashantar from '../../assests/bhashantar.png'

function Bhashantar() {
    return (
        <div>
            <div className='flex justify-around items-center p-2 bg-homeBg bg-home-png'>
                <div className='text-white'>
                    <p className='text-white font-bold about-text'>Bhashantar</p>
                    <p className='my-3'>Home / Pages / Bhasantar</p>
                </div>
                <div className='relative p-3 my-2'>
                    <img src={translate} alt="icon" width="100" height="100" />
                    <div className="absolute inset-0 bg-homeBg opacity-20 rounded-lg"></div>
                </div>
            </div>
            <div className='flex justify-center my-8'>
                <p className='text-2xl font-bold'>Revolutionizing language translation</p>
            </div>
            <div className='flex justify-around items-center'>
                <div className='w-[60%]'>
                    <p>
                        Our innovative product, Bhashantar, is an advanced machine translation application designed to facilitate seamless conversion of PDF files into different languages. Powered by state-of-the-art OCR (Optical Character Recognition) technology and translation capabilities, Bhashantar ensures accurate and efficient translation processes.
                    </p>
                    <p className='my-5'>
                        With a robust feedback loop integrated within the application, Bhashantar captures and analyzes any inaccurately labeled or translated tokens. This valuable data is then utilized to continuously refine and train the underlying model, ensuring improved accuracy and performance over time.
                    </p>
                    <p>
                        Developed under the esteemed guidance of NCERT (National Council of Educational Research and Training) and Vigyan Prasar, Bhashantar has received support and funding from reputable organizations such as StartupIndia and InvestIndia. Our commitment to delivering cutting-edge solutions in language translation underscores our dedication to meeting the diverse needs of our users and partners.
                    </p>
                </div>
                <div>
                    <img src={bhashantar} alt="Bhashantar" width="300" height="300" />
                </div>
            </div>
        </div>
    )
}

export default Bhashantar