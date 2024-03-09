import React from 'react'
import gaming from '../../assests/gaming.png'

function SmurFur() {

    return (
        <div>
            <div className='flex justify-around items-center p-2 bg-homeBg bg-home-png'>
                <div className='text-white'>
                    <p className='text-white font-bold about-text'>Smurfur</p>
                    <p className='my-3'>Home / Products / Smurfur</p>
                </div>
                <div className='relative p-3 my-2'>
                    <img src={gaming} alt="icon" width="100" height="100" />
                    <div className="absolute inset-0 bg-homeBg opacity-20 rounded-lg"></div>
                </div>
            </div>
            <div className='flex justify-center my-[3rem]'>
                <p className='text-2xl font-bold'>Experience a Dynamic Mobile Platformer Adventure</p>
            </div>
            <div className='flex justify-around items-center'>
                <div className='w-[60%]'>
                    <p style={{ lineHeight: '1.6' }}>
                        Embark on an adrenaline-fueled journey in "Smurfur," our thrilling mobile platformer game, exclusively available for Android devices. Unlike traditional platformers, "Smurfur" puts you in control of the platforms themselves, challenging you to manipulate their height to guide the character through dynamic and treacherous terrain.
                    </p>
                    <p style={{ lineHeight: '1.6' }} className='my-5'>
                        As you race through the ever-accelerating environment, collect valuable coins to unlock upgrades and power-ups in the in-game shop, while dodging enemies and overcoming obstacles. With innovative gameplay mechanics and a comprehensive shop offering shields, speed boots, and magnets, "Smurfur" delivers an exhilarating gaming experience optimized for mobile play.
                    </p>
                    <p style={{ lineHeight: '1.6' }}>
                        Explore "Smurfur" now and immerse yourself in the high-speed adventure of mastering the momentum!
                    </p>
                </div>
                <div>
                    <iframe
                        width="420"
                        height="280"
                        className='rounded-lg shadow-lg'
                        src="https://www.youtube.com/embed/B-St4i0puqI?si=09bgEohU9exCNaWO"
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

export default SmurFur