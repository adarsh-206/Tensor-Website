import React from 'react'
import ncert from '../../assests/customers/ncert.png'
import vigyanprasar from '../../assests/customers/vigyan-prasar.jpeg'
import investindia from '../../assests/customers/invest-india.jpg'
import startupindia from '../../assests/customers/startup-india.png'
import appyHub from '../../assests/customers/appyhub.svg'
import surgiSol from '../../assests/customers/surgisol.jpg'

function Customers() {
    return (
        <div className='flex justify-center items-center space-x-8 p-3 my-[3rem] mt-[2rem]'>
            <img src={ncert} alt='ncert' height={100} width={100} />
            <img src={vigyanprasar} alt='vigyan-prasar' height={170} width={170} />
            <img src={investindia} alt='invest-india' height={170} width={170} />
            <img src={startupindia} alt='startup-india' height={170} width={170} />
            <img src={appyHub} alt='appyHub' height={170} width={170} />
            <img src={surgiSol} alt='surgiSol' height={170} width={170} />
        </div>
    )
}

export default Customers