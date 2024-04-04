import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export function Contact(props) {
    

    return (
        <>

    <div className=' container mx-auto my-auto md:py-24 lg:py-24 py-24'>

    {/* ------------------------Contact--------------------------------- */}

        <div className=''>
         <div className=' bg-green-500 '>
            <h1 className='animate__animated animate__fadeInUp text-center py-10 text-3xl font-bold text-blue-950 '>Contact</h1>
         </div>
        </div>

        {/* ------------------------Heloo, नमस्ते --------------------------------- */}

        <div className=''>
         <div className=' bg-white'>
            <h1 className='py-10 px-10 text-4xl font-semibold text-primary'>
            <TypeAnimation
                        sequence={[
                            'Hello',
                            1000, 
                            'नमस्ते',
                            1000
                        ]}
                        wrapper="span"
                        speed={25}
                        repeat={Infinity}/>    
            </h1>
         </div>
        </div>

        {/* ------------------------Form + Address--------------------------------- */}

        <div className=' container w-full h-full bg-blue-50'>
            <div className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 py-4 px-4'>

                <div className='w-full h-full'>
                    <p className='text-blue-950 text-4xl font-semibold'>Have Question about our</p>
                    <p className='text-blue-950 text-4xl font-semibold'>Services and Solutions?</p>
                    <p className='text-blue-950 text-4xl font-semibold'>Drop us a Message</p>
                    <p className='text-lg py-2'>We will catch you as early as we receive the message</p>
                </div>

                <div className='w-full h-full'>

                <div className=' py-3 px-6 gap-5'>

                   <div className='h-32 w-full my-3 border border-green-500 bg-blue-200 
                    '>
                    <div className='flex text-xl px-4 py-2 space-x-3'>  
                    <p className='pt-1'><BsFillTelephoneFill /></p>
                    <p className='font-bold'>Phone:</p>
                    </div>
                    <div className='py-auto'></div>
                            <p className='px-4 text-lg'>Assistance hours: Monday – Friday, 9 am to 5 pm</p>
                            <p className=' px-4  text-blue-950 text-xl decoration-4 font-semibold '><span>+91</span><span className='px-2'>8104748884</span>
                            </p>
                    </div>

                    <div className='h-32 w-full my-3 border border-green-500 bg-blue-200 
                    '>
                    <div className='flex text-xl px-4 py-2 space-x-3'>  
                    <p className='pt-1'><FaWhatsapp /></p>
                    <p className='font-bold'>WhatsApp:</p>
                    </div>
                    <div className='py-auto'></div>
                            <p className='px-4 text-lg'>Assistance Hours: Monday - Friday 9am to 9pm.</p>
                            <p className=' px-4  text-blue-950 text-xl decoration-4 font-semibold '><span>+91</span><span className='px-2'>8104748884</span>
                            </p>
                    </div>

                    <div className='h-32 w-full my-3 border border-green-500 bg-blue-200 
                    '>
                    <div className='flex text-xl px-4 py-2 space-x-3'>  
                    <p className='pt-1'><MdEmail /></p>
                    <p className='font-bold'>Email:</p>
                    </div>
                    <div className='py-auto'></div>
                            <p className='px-4 text-lg'>Our support team will respond back within 1 business day.</p>
                            <p className=' px-4  text-blue-950 text-xl decoration-4 font-semibold '><span>+91</span><span className='px-2'>8104748884</span>
                            </p>
                    </div>

                   

                   

                </div>

                </div>

            </div>
        </div>

        {/* ------------------------ Google Map------------------------------------ */}

        <div className='w-full h-full p-0 m-0'>
        <iframe className='h-96 w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.47380446524724!2d73.09151841331472!3d19.21350029152767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795b3169ff78f%3A0x975f18de11e9a0f2!2sJagannath%E2%80%99s%20Commerce%20Plaza!5e0!3m2!1sen!2snp!4v1712086028017!5m2!1sen!2snp" ></iframe>
        </div>

    </div>
            
        </>
    )
}
