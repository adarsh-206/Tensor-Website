import React from 'react'
import HomeIcon from '../../assests/home-icon2.png'
import { TypeAnimation } from 'react-type-animation'

function Home() {
    return (
        <div className='flex justify-center items-center p-2 bg-homeBg bg-home-png gap-5 shadow-lg'>
            <div className='text-white w-[50%] font-bold home-text'>
                <TypeAnimation
                    sequence={[
                        'Transforming Tomorrow with Innovative Solutions in ML, AI, Web & App Development, AR, and VR',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <div>
                <img src={HomeIcon} alt="icon" width="488" height="545" />
            </div>
        </div>
    )
}

export default Home