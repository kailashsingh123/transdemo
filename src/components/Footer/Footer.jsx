import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





export function Footer(props) {
    

    return (
        <>
     <div className=' w-full h-full m-0 p-0'>
        <div className=' space-y-6 w-full h-full bg-white '>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5 py-3 mx-2 content-center'>

                <div className='grid justify-items-center'>
                <div className='max-h-max w-[80%]  py-3 my-2 text-xl text-justify font-normal'>
                <span>    
                 <img src="image/logo1.jpeg" alt="logo" className='h-24 w-60'  />
                </span>
                <p className='pt-3'>We are One Stop Company, offering range of cyber security and data privacy services and solutions to Secure, Safeguard and Protect your Business Enablers and Build Digital Trust among your customers.</p>
                </div>
                </div>

               
                <div className='max-h-max w-full  py-6  my-2 text-xl text-justify font-normal'>
                
                <div className='grid justify-items-center'>
                    <ul className='text-lg'>
                    <h1 className='text-2xl text-blue-950  font-semibold'>Company</h1>
                        <li className='hover:underline opacity-80'><Link to="/">Home</Link></li>
                        <li className='hover:underline opacity-80'><Link to="/about">About Us</Link></li>
                        <li className='hover:underline opacity-80'><Link to="/securingpeople">Services</Link></li>
                        <li className='hover:underline opacity-80'><Link to="/solutions">Solutions</Link></li>
                        <li className='hover:underline opacity-80'><Link to="/contact">Contact</Link></li>
                        <li className='hover:underline opacity-80'><Link>Work With Us</Link></li>
                        <li className='hover:underline opacity-80'><Link>Privacy and Cookie Policy</Link></li>
                    </ul>
                </div>
                </div>

                <div className='max-h-max w-full px-8 my-6 mx-1 text-xl text-justify font-normal'>
                    <div className=''>
                    <div>
                    <h1 className='text-2xl text-blue-950 font-semibold'>Contact Us</h1>
                    <p className='flex text-xl py-auto px-3 font-bold opacity-80'><span className='pt-2 pe-3'><MdEmail /></span>Email</p>
                    <p className='ps-12 opacity-80'>stallionit295@gmail.com</p>
                    </div>
                    
                    <div>
                    <p className='flex text-xl py-auto px-3 font-bold  opacity-80'><span className='pt-2 pe-3'><BsFillTelephoneFill /></span>Phone</p>
                    <p className='ps-12 opacity-80'><span>+91</span><span className='px-2'>8104748884</span></p>
                    </div>

                    <div>
                    <p className='flex text-xl py-auto px-3 font-bold   opacity-80'><span className='pt-2 pe-3'><FaLocationDot /></span>Address</p>
                    <p className='ps-12 text-justify opacity-80'><span className='px-2 text-base'>Jagannath Commerce Plaza, 2nd Floor Office No 221, Dombivli Manpada Road, Dombivli East, Thane Maharashtra 421201.</span></p>
                    </div>
                </div>
                
                </div> 

            </div>
        </div>
       <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 py-3 px-6 gap-6 '>
        <div className='max-h-max py-4 px-4 text-xl  w-full bg-white '>
            <p>© 2024. All Rights Reserved By STALLION IT SECURITIES</p>
        </div>
        <div className='max-h-max py-4 px-4 text-xl items-center  w-full bg-white'>
            <p className='flex space-x-5 opacity-70 '><FaLinkedin /><FaTwitter /><MdOutlineFacebook /></p>
        </div>
        </div>

    </div>
        

        </>
    )
}
