import React, { useState } from 'react';
import AboutBg from '../../assests/location.png';
import OfficeImg from '../../assests/office.png';
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";

function Contactus() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <div className='flex justify-around items-center p-2 bg-homeBg bg-home-png'>
                <div className='text-white'>
                    <p className='text-white font-bold about-text'>Blogs</p>
                    <p className='my-3'>Home / Pages / Blog</p>
                </div>
                <div className='p-3'>
                    <img src={AboutBg} alt="icon" width="130" height="130" />
                </div>
            </div>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="bg-[#F2F2F2] p-4 rounded-md shadow-md">
                        <p className='p-2 mb-4'><CiLocationOn size={40} color='blue' /></p>
                        <h2 className="text-lg font-bold mb-2">Address</h2>
                        <p>63-B, Indra Vihar Colony,</p>
                        <p>Airport Road, Bhopal, M.P. 462030</p>
                    </div>
                    <div className="bg-[#F2F2F2] p-4 rounded-md shadow-md">
                        <p className='p-2 mb-4'><TfiEmail size={38} color='blue' /></p>
                        <h2 className="text-lg font-bold mb-2">Write Us</h2>
                        <p>tensor.solutiontech@gmail.com</p>
                    </div>
                    <div className="bg-[#F2F2F2] p-4 rounded-md shadow-md">
                        <p className='p-2 mb-4'><IoCallOutline size={40} color='blue' /></p>
                        <h2 className="text-lg font-bold mb-2">Call Us</h2>
                        <p>+91-9560187169</p>
                    </div>
                </div>
            </div>
            <div className='container flex justify-around mx-auto py-8'>
                <div>
                    <img src={OfficeImg} alt="icon" width="430" height="430" />
                </div>
                <div className="ml-8 shadow-xl p-8 rounded-md">
                    <h2 className='text-3xl font-bold my-5'>Write Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-gray-300 bg-[#F2F2F2] rounded-md p-2 focus:outline-none"
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-gray-300 bg-[#F2F2F2] focus:outline-none rounded-md p-2"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border-gray-300 bg-[#F2F2F2] rounded-md p-2 focus:outline-none"
                                rows="4"
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="file" className="block mb-1">Upload Document (Optional)</label>
                            <input
                                type="file"
                                id="file"
                                name="file"
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <button type="submit" className="w-full bg-homeBg text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                    </form>
                </div>
            </div>
            <div className='shadow-lg'>
                <div className="w-full h-96">
                    {/* <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.95586305615!2d77.35667427442422!3d23.281053406634616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c67c6f6ede10b%3A0x4fc19107b0b82c24!2s63-B%2C%20Indra%20Vihar%20Colony%2C%20Tilak%20Nagar%2C%20Airport%20Road%2C%20Bhopal%2C%20Madhya%20Pradesh%20462030!5e0!3m2!1sen!2sin!4v1709026591320!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe> */}
                </div>
            </div>
        </div>
    );
}

export default Contactus;