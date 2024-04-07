import React from 'react'
import { Carousel } from './Carousel'
import { Carousel1 } from './Carousel1';
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
import { RiContactsBookFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';




export function Home(props) {
    

    return (
        <>
        <div className='container mx-auto my-auto md:py-24 lg:py-20 py-24'>
        <Carousel1/>
        <div className='max-h-max w-full bg-sky-200'>
        <p className="text-2xl text-green-500 uppercase ml-5 px-3 py-10">Why Choose Us</p>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5 py-5 px-5 mx-8'>
            
            
                <div className='bg-white px-8 py-8 rounded-[24px] shadow-[20px] align-bottom hover:scale-x-110 hover:scale-y-110 transition duration-300 overflow-hidden'>
                    <span><img src="image/buss.png" alt="" className='h-24 w-24' /></span>
                    <h1 className='text-2xl pt-5 font-medium text-violet-950'>Business Oriented</h1>
                    <p className='text-justify text-lg'>We prioritise and speak business to bridge the gap between business and technology so as to deliver tangible benefits, thereby enabling you to achieve your business objectives.
                    </p>
                </div>
                <div className='bg-white px-8 py-8 rounded-[24px] align-bottom hover:scale-x-110 hover:scale-y-110 transition duration-300 '>
                    <span><img src="image/focus.png" alt="" className='h-24 w-24' /></span>
                    <h1 className='text-2xl pt-5 font-medium text-violet-950'>Quality Conscious</h1>
                    <p className='text-justify text-lg'>Quality is ingrained in our DNA and we continuously strive to ensure our processes are of global standards.
                    </p>
                </div>
                <div className='bg-white px-8 py-8 rounded-[24px] align-bottom hover:scale-x-110 hover:scale-y-110 transition duration-300  '>
                    <span><img src="image/foues.png" alt="" className='h-24 w-24' /></span>
                    <h1 className='text-2xl pt-5 font-medium text-violet-950'>Focus & Innovative</h1>
                    <p className='text-justify text-lg text-balance'>Business Enablers are Constant and so does the Change. With ever changing nature of business, threats and challenges, being focused, coupled with innovation helps us to adapt and deliver on time.
                    </p>
                </div>
                <div className='bg-white px-8 py-8 rounded-[24px] align-bottom hover:scale-x-110 hover:scale-y-110 transition duration-300 '>
                    <span><img src="image/result.png" alt="" className='h-24 w-24' /></span>
                    <h1 className='text-2xl pt-5 font-medium text-violet-950'>Results Driven</h1>
                    <p className='text-justify text-lg'>Our 5 D Approach – Deep Dive to Derive, not only enable us to understand, design and deliver the solution, but also enable our customers to derive benefits from the tangible outcome of the solution.
                    </p>
                </div>
                
               
                </div>   
        </div>

        <div className='max-h-max w-full bg-sky-200'>
            <p className='text-4xl text-center font-semibold text-blue-950'>Our Services</p>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 py-5 px-10 mx-auto place-items-center' >
           <div className='bg-white px-5 shadow-2xl py-6  h-full w-auto'>
                    <span><img src="image/sec-pepo.jpg" alt="" className='h-36 w-36 mx-auto' /></span>
                    <h1 className='text-2xl text-center font-medium text-violet-950'>Securing People</h1>
                    <p className='text-justify text-xl pb-3'>People are the biggest asset of any organization in terms of value and contribute more than any other business enabler as all other enablers are either dependent on People or focused.
                    </p>
                    <p className='text-white text-[18] text-center py-4 mx-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full '>Learn More<span>..</span> </p>
            </div>
            <div className='bg-white px-5 shadow-2xl py-6  h-full w-auto'>
                    <span><img src="image/sec-proess.jpg" alt="" className='h-36 w-36 mx-auto' /></span>
                    <h1 className='text-2xl font-medium text-center text-violet-950'>Securing “Processes”</h1>
                    <p className='text-justify text-xl pb-3'>Processes are the step-by-step guide that describes how things are done in the best possible way in the organization, thereby making it easy for people to focus on the major areas.
                    </p>
                    <p className='text-white text-[18] text-center py-4 mx-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full '>Learn More<span>..</span> </p>
            </div>
            <div className='bg-white px-5 shadow-2xl py-6  h-full w-auto'>
                    <span><img src="image/sec-tech.jpg" alt="" className='h-36 w-36 mx-auto' /></span>
                    <h1 className='text-2xl font-medium text-center text-violet-950'>Securing “Technology”</h1>
                    <p className='text-justify text-xl pb-3'>Automating the processes and the mundane and repetitive work of people, helps the business in enhancing the outcome by leveraging the skills of the people to utmost level.
                    </p>
                    <p className='text-white text-[18] text-center py-4 mx-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full '>Learn More<span>..</span> </p>
            </div>
            <div className='bg-white px-5 shadow-2xl py-6  h-full w-auto'>
                    <span><img src="image/service-think.jpg" alt="" className='h-36 w-36 mx-auto' /></span>
                    <h1 className='text-2xl font-medium text-center text-violet-950'>Securing “Things”</h1>
                    <p className='text-justify text-xl pb-3'>The objects or tools or sensors which aids in automating the processes and gets rid of the mundane and repetitive work of people, plays a pivotal and significant role in achieving the goals of the organization.
                    </p>
                    <p className='text-white text-[18] text-center py-4 mx-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full '>Learn More<span>..</span> </p>
            </div>
            <div className='bg-white px-5 shadow-2xl py-6  h-full w-auto'>
                    <span><img src="image/service-data1.jpg" alt="" className='h-36 w-36 mx-auto' /></span>
                    <h1 className='text-2xl font-medium text-center text-violet-950'>Securing “Data”</h1>
                    <p className='text-justify text-xl pb-3'>The information and the intelligence derived from the efforts of the people, to make the processes automatic; through the use of technology and its objects, plays a decisive and conclusive role.
                    </p>
                    <p className='text-white text-[18] text-center py-4 mx-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full '>Learn More<span>..</span> </p>
            </div>
           </div>
        </div>

        <div className='max-h-full w-full bg-indigo-100 bg-opacity-40'>
        <p className='text-3xl text-center font-semibold text-blue-950'>Our Work & Reach</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5 py-5 px-10 mx-auto place-items-center' >

        <div className='bg-white py-5 px-2 shadow-2xl opacity-100  h-56 w-72 rounded-bl-3xl'>
                    <span><img src="image/projects-icon-6-removebg-preview.png" alt="" className='h-20 w-20 mx-auto' /></span>
                    <h1 className='text-3xl pt-3 text-center font-semibold  text-violet-950'>205+</h1>
                    <p className='text-xl p-5 font-semibold text-blue-950'>Projects Completed</p>
        </div>
        <div className='bg-white py-5 px-2 shadow-2xl opacity-100  h-56 w-72 rounded-bl-3xl'>
                    <span><img src="image/cliente-removebg-preview.png" alt="" className='h-20 w-20 mx-auto' /></span>
                    <h1 className='text-3xl pt-3 text-center font-semibold  text-violet-950'>300+</h1>
                    <p className='text-xl p-5 font-semibold text-blue-950'>Customers</p>
        </div>
        <div className='bg-white py-5 px-2 shadow-2xl opacity-100  h-56 w-72 rounded-bl-3xl'>
                    <span><img src="image/factory-industrial.png" alt="" className='h-20 w-20 mx-auto' /></span>
                    <h1 className='text-3xl pt-3 text-center font-semibold  text-violet-950'>70+</h1>
                    <p className='text-xl p-5 font-semibold text-blue-950'>Industry Served</p>
        </div>
        <div className='bg-white py-5 px-2 shadow-2xl opacity-100  h-56 w-72 rounded-bl-3xl'>
                    <span><img src="image/country.png" alt="" className='h-20 w-20 mx-auto' /></span>
                    <h1 className='text-3xl pt-3 text-center font-semibold  text-violet-950'>25+</h1>
                    <p className='text-xl p-5 font-semibold text-blue-950'>Countries</p>
        </div>

        </div>
        </div>
{/*--------------------------- Client Testimonial Start --------------------------------  */}


        <div className='max-h-max w-full bg-indigo-300 bg-opacity-40'>
        <p className='text-4xl text-center py-4 font-semibold text-blue-950'>Client Testimonials  </p>
        <p className=' ps-8 text-xl'>Check Our Customers Success Story</p>
         
         <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-3 px-6 gap-6'>

            <div className=' w-full bg-white rounded-md'>
                <div className='flex text-5xl py-6'><BiSolidQuoteSingleLeft /><BiSolidQuoteSingleLeft /></div>
                <div className='mx-3 text-xl text-justify '><p>"STALLION IT SECURITIES greatly stepped up our efforts in designing and implementing the Data Privacy Framework.Their competent set of skills and experiences were exactly what we needed." </p></div>
                <div className='mx-8 py-5 text-xl text-justify '>
                    <h4>Duttaprasad Joshi </h4>
                    <p>Chief Manager,<small> 3I Infotech</small>
                    </p>
                    <p className='flex'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                </div>
            </div>
            <div className=' w-full bg-white rounded-md'>
                <div className='flex text-5xl py-6'><BiSolidQuoteSingleLeft /><BiSolidQuoteSingleLeft /></div>
                <div className='mx-3 text-xl text-justify '>
                    <p>“STALLION IT SECURITIES has played a key role in helping us strengthen our Information Security Profile. They have been a very able partner in this journey and bring a lot of value to the table through their subject matter expertise.”</p>
                </div>
                <div className='mx-8 py-5 text-xl text-justify '>
                    <h4>Swapnil Rajepawar</h4>
                    <p>GM IT Infrastructure, <small>Nanavati Hospital</small>
                    </p>
                    <p className='flex'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                </div>
            </div>
             
         </div>

        </div>



{/*---------------------------------- Client Testimonial End -------------------------  */}

        <div className=' h-full space-y-6 w-full bg-white '>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5 pt-8 mx-2'>
                {/* <div className=' py-3 px-6 gap-5'> */}
                <div className=' py-3 px-3  gap-5'>
                    <h1 className='text-4xl font-semibold text-blue-950'>Interested in working with us?</h1>
                    <p className='text-xl py-1'>LET’S TALK AND GET STARTED</p>
                    <div className='h-48 md:h-56 lg:h-32 w-full border border-green-500 bg-blue-300 rounded-lg
                    '>  
                    <p className='ps-20 py-auto'>OFFICE ADDRESS</p>
                    <div className='flex'>
                    <div className='text-3xl py-6 px-3'><RiContactsBookFill/></div>
                        <div className='w-full h-full'>
                             <p className=' text-blue-950 text-xl decoration-4 font-bold  px-3 mx-4'>Jagannath Commerce Plaza, 2nd Floor Office No 221, Dombivli Manpada Road, Dombivli East, Thane Maharashtra 421201.
                            </p>
                     </div>
                    </div>
                    </div>
                    <div className='h-16 w-full my-3 border border-green-500 bg-blue-300 rounded-lg
                    '>  
                    <p className='ps-20 py-auto'>MAIL TO US</p>
                    <div className='flex'>
                    <div className='text-3xl py-auto px-3'><MdEmail /></div>
                        <div className=''>
                             <p className=' text-blue-950 text-xl decoration-4 font-bold  px-3 mx-4'>stallionit295@gmail.com
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className='h-16 w-full my-3 border border-green-500 bg-blue-300 rounded-lg
                    '>  
                    <p className='ps-20 py-auto'>MESSAGE US ON WHATSAPP</p>
                    <div className='flex'>
                    <div className='text-3xl py-auto px-3'><FaWhatsapp /></div>
                        <div className=''>
                             <p className=' text-blue-950 text-xl decoration-4 font-bold  px-3 mx-4'><span>+91</span><span className='px-2'>8104748884</span>
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className='h-16 w-full my-3 border border-green-500 bg-blue-300 rounded-lg
                    '>  
                    <p className='ps-20 py-auto'>OUR CONTACT NUMBER</p>
                    <div className='flex'>
                    <div className='text-3xl py-auto px-3'><BsFillTelephoneFill /></div>
                        <div className=''>
                             <p className=' text-blue-950 text-xl decoration-4 font-bold  px-3 mx-4'><span>+91</span><span className='px-2'>8104748884</span>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className=' md:pt-32 lg:p-16 py-3 px-3'>
                        <iframe className='h-96 w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.47380446524724!2d73.09151841331472!3d19.21350029152767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795b3169ff78f%3A0x975f18de11e9a0f2!2sJagannath%E2%80%99s%20Commerce%20Plaza!5e0!3m2!1sen!2snp!4v1712086028017!5m2!1sen!2snp" ></iframe>
                </div>
            </div>

        </div>

       </div>

          
        </>
    )
}
