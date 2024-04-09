import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";

export function Career(props) {
    

    return (
        <>
        <div className='container mx-auto my-auto md:py-24 lg:py-24 py-28'>
            
            {/* Job Openings  */}

         <div className='bg-green-500'>
          <h1 className='animate__animated animate__fadeInUp text-center m-0 p-0 py-10 text-4xl font-bold text-blue-950 '>Job Openings</h1>
         </div>

           {/* Stallion IT Securities */}
         <div className='max-h-max w-full bg-white'>
           <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-4 px-4 gap-4'>
            <div className='mx-5'>
             <p className='animate__animated animate__fadeInUp text-blue-950 text-4xl font-bold'>Career and Culture at Stallion IT Securities Worldwide Pvt. Ltd.</p>
             <p className='animate__animated animate__fadeInUp text-[18px] pt-3 text-justify'>Being in the space of Cyber Security and Data Privacy, challenges are part and parcel of work life for a young 2-year-old startup company like us. But at the same time, provides enough space to balance your work-life as well develop yourself into a confident professional, capable enough to carve out its own figure in this fiercely competitive market of Cyber Security and Data Privacy.</p>
             <p className='pt-5 text-xl'>Send Resume: <span className='text-secondary'>stallionit295@gmail.com</span></p>
             <button className='h-14 w-52 text-white text-[18] px-auto py-auto my-8 bg-gradient-to-r from-secondary to-primary rounded-full '>View Opening<span>..</span> </button>
            </div>
            <div>
              <span><img src="image/Untitled-5.jpg" alt="" className=' mx-auto' /></span>
            </div>
           </div>
         </div>


        <div className='w-full h-full bg-blue-300'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-7 py-16 px-2 md:px-3 lg:px-12'>

{/* ------------------------------------------------------------------------------- */}

                <div className='animate__animated animate__fadeInUp animate__delay-1s h-full w-full bg-white rounded-md md:px-2 px-5 py-5 '>
                   <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:text-left md:text-left text-center'>
                    <div className='w-full flex justify-center items-center'>
                        <img src="image/Untitled-1.jpg" className='h-40 w-36 py-4' alt="" />
                    </div>
                    <div className='col-span-2 pr-4'>
                        <p className='text-[23px] py-3 font-bold text-blue-950 '>Flexible Working Environment</p>
                        <p className='text-[17px] font-normal text-justify'>Work From Anywhere and Anytime based on Job Role.</p>
                    </div>
                    
                </div>
                </div>
                
                <div className='animate__animated animate__fadeInUp animate__delay-1s h-full w-full bg-white rounded-md md:px-2 px-5 py-5 '>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:text-left md:text-left text-center  '>
                    <div className=''>
                        <img src="image/Untitled-3.jpg" className='h-40 w-36 py-4 mx-auto' alt="" />
                    </div>
                    <div className='col-span-2 pr-4'>
                        <p className='text-[23px] py-3 font-bold text-blue-950 '>
                        Ample Learning Opportunities</p>
                        <p className='text-[17px] font-normal text-justify'>Being a Young Company, no dearth of learning opportunities</p>
                    </div>
                </div>
                </div>

{/* ----------------------------------------------------------------------------------- */}

<div className='animate__animated animate__fadeInUp animate__delay-1s h-full w-full bg-white rounded-md md:px-2 px-5 py-5 '>
                   <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:text-left md:text-left text-center  '>
                    <div className=''>
                        <img src="image/Untitled2.jpg" className='h-40 w-36 py-4 mx-auto' alt="" />
                    </div>
                    <div className='col-span-2 pr-4'>
                        <p className='text-[23px] py-3 font-bold text-blue-950 '>
                        Work and Grow with Us</p>
                        <p className='text-[17px] font-normal text-justify'>Prove Yourself, then Sky is the Limit.</p>
                    </div>
                </div>
                </div>
                
                <div className='animate__animated animate__fadeInUp animate__delay-1s h-full w-full bg-white rounded-md md:px-2 px-5 py-5 '>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:text-left md:text-left text-center  '>
                    <div className=''>
                        <img src="image/Untitled-4.jpg" className='h-40 w-36 py-4 mx-auto' alt="" />
                    </div>
                    <div className='col-span-2 pr-4'>
                        <p className='text-[23px] py-3 font-bold text-blue-950 '>        
                        Cordial and Friendly Environment</p>
                        <p className='text-[17px] font-normal text-justify'>Relationships and Work are equally important.</p>
                    </div>
                </div>
                </div>
            </div>    
        </div>
      </div>
        </>
    )
}
