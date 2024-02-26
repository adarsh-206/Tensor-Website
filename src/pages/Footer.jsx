import React from 'react';

function Footer() {
    return (
        <footer className="bg-homeBg text-white py-8 mt-[5rem]">
            <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
                <div className="mb-4 md:mb-0 md:flex-grow-0 md:w-1/3 mr-[5rem]">
                    <h2 className="text-xl font-bold mb-2">Tensor</h2>
                    <p className="text-sm">We deeply understand our clients' challenges and offer progressive technological solutions through incremental implementation for swift benefits.</p>
                    <p className="text-[1rem] mt-4">tensor.solutiontech@gmail.com</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:flex-grow">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">What we do</h3>
                        <ul className="text-sm">
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Who we are</h3>
                        <ul className="text-sm">
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Our works</h3>
                        <ul className="text-sm">
                            <li>Project 1</li>
                            <li>Project 2</li>
                            <li>Project 3</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Follow us</h3>
                        <p className="text-sm">Social Media Links</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-[3rem]'>
                <p className='text-[0.8rem]'>© 2022 AppyHub Technology Solutions Pvt Ltd. All Rights Reserved. Privacy policy</p>
            </div>
        </footer>
    )
}

export default Footer;