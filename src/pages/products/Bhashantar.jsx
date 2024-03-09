import React from 'react'
import translate from '../../assests/translate.png'
import bhashantar from '../../assests/bhashantar.png'

function DemoCard({ title, videoId, description }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <iframe
                className="w-full"
                style={{ height: '230px', width: '100%' }}
                title={title}
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="px-6 py-4">
                <div className="font-bold text-sm mb-2">{title}</div>
                <div className="text-[0.9rem] mb-2">{description}</div>
            </div>
        </div>
    );
}

function Bhashantar() {

    const demoVideos = [
        { title: 'Revolutionary PDF Translation', description: 'Explore our cutting-edge PDF translation technology with Bhashantar, enabling seamless conversion of PDF files into multiple languages.', videoId: '2k4AMAliHQI?si=ZT2o6SVdDYJRYrOp' },
        { title: 'Enhanced PDF Editing', description: 'Discover the intuitive PDF editing feature in Bhashantar, empowering users to modify and enhance translated PDF documents effortlessly.', videoId: '_2K23UMiUoo?si=01LxcGfTIHSy5o8p' },
        { title: 'Precision Annotation with Canvas', description: 'Dive into the innovative Canvas Annotator tool within Bhashantar, facilitating easy annotation and correction of translated content for improved accuracy.', videoId: 'f2ol4djrH5Y?si=DKUcYsw1PZKh7azb' }
    ];

    return (
        <div>
            <div className='flex justify-around items-center p-2 bg-homeBg bg-home-png'>
                <div className='text-white'>
                    <p className='text-white font-bold about-text'>Bhashantar</p>
                    <p className='my-3'>Home / Products / Bhasantar</p>
                </div>
                <div className='relative p-3 my-2'>
                    <img src={translate} alt="icon" width="100" height="100" />
                    <div className="absolute inset-0 bg-homeBg opacity-20 rounded-lg"></div>
                </div>
            </div>
            <div className='flex justify-center my-[3rem]'>
                <p className='text-2xl font-bold'>Revolutionizing language translation</p>
            </div>
            <div className='flex justify-around items-center'>
                <div className='w-[60%]'>
                    <p style={{ lineHeight: '1.6' }}>
                        Our innovative product, Bhashantar, is an advanced machine translation application designed to facilitate seamless conversion of PDF files into different languages. Powered by state-of-the-art OCR (Optical Character Recognition) technology and translation capabilities, Bhashantar ensures accurate and efficient translation processes.
                    </p>
                    <p style={{ lineHeight: '1.6' }} className='my-5'>
                        With a robust feedback loop integrated within the application, Bhashantar captures and analyzes any inaccurately labeled or translated tokens. This valuable data is then utilized to continuously refine and train the underlying model, ensuring improved accuracy and performance over time.
                    </p>
                    <p style={{ lineHeight: '1.6' }}>
                        Developed under the esteemed guidance of NCERT (National Council of Educational Research and Training) and Vigyan Prasar, Bhashantar has received support and funding from reputable organizations such as StartupIndia and InvestIndia. Our commitment to delivering cutting-edge solutions in language translation underscores our dedication to meeting the diverse needs of our users and partners.
                    </p>
                </div>
                <div>
                    <img src={bhashantar} alt="Bhashantar" width="300" height="300" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-[3rem]'>
                <p className='text-2xl font-bold'>Watch Demos</p>
                <div className="flex flex-wrap justify-center mt-5">
                    {demoVideos.map((video, index) => (
                        <DemoCard key={index} title={video.title} videoId={video.videoId} description={video.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Bhashantar