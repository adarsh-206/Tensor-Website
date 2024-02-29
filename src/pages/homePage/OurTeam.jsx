import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

function OurTeam() {
    const teamMembers = [
        { id: 1, name: 'John Doe', designation: 'CEO', image: 'https://t4.ftcdn.net/jpg/04/95/55/07/360_F_495550716_p75CvEQGYpmsrAnP4JBTvGTz6esdxjTD.jpg' },
        { id: 2, name: 'Jane Smith', designation: 'CTO', image: 'https://img.freepik.com/premium-photo/image-25-year-old-indian-man-that-is-smiling-camera_878783-7217.jpg' },
        { id: 3, name: 'Alice Johnson', designation: 'Lead Developer', image: 'https://img.freepik.com/premium-photo/image-25-year-old-indian-man-that-is-smiling-camera_878783-7218.jpg' },
        { id: 4, name: 'Bob Brown', designation: 'Designer', image: 'https://storage.googleapis.com/pai-images/db216eb37e3745a2b254fd3de1eb68d7.jpeg' }
    ];

    return (
        <div className='px-3 py-5 mt-[2rem]'>
            <div className='flex justify-center items-center my-2'>
                <div className='border border-homeBg rounded-2xl px-2 py-1 mb-3 hover:bg-homeBg'>
                    <p className='text-homeBg text-center hover:text-white'>Our Team</p>
                </div>
            </div>
            <p className='text-lg text-center font-[500] py-1 mb-8'>Meet our dedicated team of professionals, committed to delivering excellence in every endeavor.</p>
            <div className='flex flex-wrap'>
                {teamMembers.map(member => (
                    <div key={member.id} className='w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2'>
                        <div>
                            <div className='rounded-t-lg p-3 overflow-hidden flex justify-center items-center'>
                                <div className='border-[5px] border-homeBg rounded-full p-2'>
                                    <div className='rounded-full overflow-hidden relative' style={{ width: '150px', height: '150px' }}>
                                        <img src={member.image} alt={member.name} className='w-full h-full object-cover' />
                                        <div className="absolute inset-0 flex items-center justify-center bg-homeBg opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <div className="flex items-center justify-center">
                                                <a href="#" className="text-white hover:text-gray-400 transition-colors duration-300">
                                                    <div className='bg-white rounded-full p-3'>
                                                        <FaLinkedinIn size={16} color='blue' />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='rounded-b-lg p-4 text-center'>
                                <p className='font-semibold'>{member.name}</p>
                                <p className='text-gray-600'>{member.designation}</p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default OurTeam;