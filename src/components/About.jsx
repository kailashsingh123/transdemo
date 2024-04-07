import React from 'react'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import Marquee from "react-fast-marquee";

export function About(props) {
    

    return (
        <>
        {/* About Us */}
        <div className=' w-full h-full m-0 p-0 md:py-24 lg:py-24 py-24'>
        
        
         <div className='w-full h-full m-0 p-0 bg-green-500 '>
            <h1 className='animate__animated animate__fadeInUp text-center py-10 text-3xl font-bold text-blue-950 '>About Us</h1>
         </div>
          
         
        {/* About Transconst */}
        
        <div className='h-full w-full bg-white'>
            <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2 py-5'>
                <div className=' max-h-max w-full  px-8 py-5'>
                    <h1 className='pb-5 text-4xl font-bold text-blue-950'>About <span className='text-green-600'> STALLION IT SECURITIES</span></h1>
                  <p className=' text-lg text-justify'>Stallion IT Securities Worldwide Pvt. Ltd. is a technologically driven global institutionfrom the city of Mumbai India. We deploy our service-oriented courtesies into IT and
                  Information Security services. India is advancing and evolving its potential in zones like IT Outsourcing, Systems Integration, IT Infrastructure Management, IT Security, Audit Services, Cyber Crime Investigations, Cyber Law, Cyber Forensics and IT Security Training Business. We at Stallion IT Securities Worldwide Pvt. Ltd are passionate about India's growth in this spectrum and are augmenting this evolution through our expertise. Our training and development cell has been exemplary in nurturing the brightest minds in the industry. We are also proud to be one of the most trusted and largest in the country providing Information Security & Ethical Hacking training courses in India. Our professionals come from all backgrounds and are today competing as a global level in the field of information security.The company is inspired by the guiding principle and vision of educating cyber aspirants and making the masses aware of the nuances of cybercrime. We provide Training, workshops, seminars, and boot camps on Cyber Security, Computer Forensics & Cyber Investigation Support. Catering to additional IT Services and Sales is also one of our USPs, for some of our clientele.</p>
                </div>

                {/* <div className='flex max-h-max w-full  px-10'>
 
                   <div className='top-10 hover:scale-x-110 hover:scale-y-110 transition duration-300'>
                     <img src="image/attack.jpeg" className=' pt-3 max-h-lvh w-72 float-left rounded-bl-3xl' alt="" />
                   </div>
                   <div className='hover:scale-x-110 hover:scale-y-110 transition duration-300'>
                     <img src="image/security.jpg" className=' max-h-lvh w-96 float-right rounded-br-3xl' alt="" />
                    </div>
                   
                </div> */}

                <div className='flex flex-col max-h-max w-full py-4  px-10'>
                
                    <div className='hover:scale-x-110 hover:scale-y-110 transition duration-300'>
                    <img src="image/attack.jpeg" className=' pt-3 h-72 w-full px-8' alt="" />
                    </div>
                    <div className='hover:scale-x-110 hover:scale-y-110 transition duration-300'>
                    <img src="image/security.jpg" className=' h-80 w-full rounded-b-3xl' alt="" />
                    </div>
                
                </div>

            </div>
            </div> 

        

        {/* Vision Mission */}

        <div className=' max-h-max w-full bg-blue-100 mx-auto my-4'>
            <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-1 py-10 px-5 mx-auto'>
             <div className='max-h-max w-full  px-2 py-2'>
                <img src="image/v-m-v.png" alt="" className=' mx-auto h-96 w-96' />
             </div>
             <div className='max-h-max w-full  px-0 py-2'>
                <h1 className='text-4xl font-semibold text-blue-950 ps-0 py-4'>Vision</h1>
                <p className='ps-0text-lg'>To be among the top and the most trusted companies in the cyber security space</p>
                <h1 className='text-4xl font-semibold text-blue-950 ps-0 py-4'>Mission</h1>
                <p className='ps-0 text-lg'>To provide best suited, quality and innovative solutions to people and organizations in their journey towards sustainable maturity of security posture.</p>
                <h1 className='text-4xl font-semibold text-blue-950 ps-0 py-4'>Value</h1>
                <ul className='px-6 list-disc text-lg'>
                    <li>Transparent</li>
                    <li>Customer Focus</li>
                    <li>Innovative</li>
                    <li>Quality Conscious</li>
                    <li>Empower and Enable</li>
                </ul>
             </div>

            </div>
        </div>
         
        {/* Our Approach */}
        <div className=' max-h-max w-full bg-white py-5 px-5'>
             <div className=' grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                <div className='w-full h-full'>
                  <img src="image/d.jpg" alt="" />
                </div>
                <div className='w-full h-full col-span-2 '>
                    <h1 className='text-4xl text-blue-950 font-bold py-5 px-5 ps-0'>Our Approach</h1>
                    <p className='text-lg  text-justify'>Our solutions and services are customised as per customer needs and requirements and <span>1.)</span> Broadly comprises of a comprehensive Deep Dive consultation to help us Discover the gaps and opportunities in their technology stack, <span>2.)</span> A comprehensive Design plan that includes a project plan with timelines and milestones, a cost analysis, and a schedule to deliver on our promises. <span>3.)</span>We not only Deliver our solutions and services, but also partner and support with our customers to secure and optimize their digital landscape, thereby enabling them to Derive benefits from the Secured Technology landscape. That’s how we ensure your success.</p>
                </div>

             </div>
        </div>

        {/* Founders Message */}

        <div className=' h-full w-full bg-blue-100 mx-auto py-10'>
                <div className='px-14 py-6 float-left'>
                   <img src="image/sk.jpg" className='h-96 w-96' alt="" />
                    <h1 className='text-4xl text-blue-950 font-bold text-center tracking-wider italic '>Jatinkumar Modh</h1>
                    <h1 className='text-lg font-bold text-center '>Founder & Principal Consultant</h1>
                </div>
                
                <div className='w-full h-full px-2 py-0'>
                 <p className=' uppercase text-lg text-green-600'>founders Message</p>   
                <div className='text-3xl'><BiSolidQuoteSingleLeft /></div>
                    <p className='px-6 list-disc text-justify text-lg space-y-3'>
                                            He is a well-recognized name in the Cyber World and with an experience of more than
                        22+ years, he has been conducting Ethical Hacking training and providing
                        Information Security Services across the globe. He is widely sought-after Speaker on
                        Cyber Security and Cyber Law and has been invited by many corporates
                        and leading institutions of India including IIT's and NIT's for conducting workshops,
                        seminars, boot camps and trainings on Ethical Hacking and Information
                        Security. He has trained more than 25000 individuals in Colleges, Corporates and
                        Government Departments. He has trained employees of some of the most
                        prestigious clients like Accenture, Wipro, Cap Gemini, Trend Micro, TCS, HCL and many
                        others. His area of expertise includes Vulnerability Assessment, Information Security
                        Audits, Penetration Testing, Source Code Reviews, Computer Forensics, Ethical
                        Hacking, Cyber Law, etc. first accomplishment was finding a loophole in SMS gateway.
                        Protected many Indian websites from getting defaced by Pakistan cyber army with the
                        help of other team members of Indian officials with a pseudo name (using Fake Identity).
                        Being a Cyber Security Researcher and Ethical Hacking Expert, has revealed numerous
                        critical vulnerabilities, bugs, loopholes, etc. on websites and networks of major
                        corporates and institutions like Indian Railways, Monster India, PKF Group, Eastern
                        Academy of Science and Technology, Satyam Group of Colleges and many others. He
                        also resolved many Cyber Crime cases and as a security advisor for various reputed
                        organizations, banks and ecommerce companies, helping them in designing safe cyber
                        architecture for their web servers and networks. His major accomplishments include
                        identifying the websites which were involved in Fraudulent Activities like 419 Scam,
                        Spamming etc. He recently initiated and set up a feedback loop with different
                        Antimalware organizations to proactively share & report details about the abusive
                        Domain names and different Malwares. All his efforts are lauded by members of
                        various underground hacking groups, security researchers and communities worldwide.
                        His fanaticism for Ethical Hacking and Cybersecurity made him expert in
                        the security domain. With an aim to secure the Cyber World from unethical Hackers, Mr.
                        Subhash Gurav has been imparting practical knowledge of Ethical
                        Hacking, Information Security and Cyber Forensics to the budding technical workforce of
                        the country.
                    </p>
                    <div className='text-3xl'><BiSolidQuoteSingleLeft /></div>
                </div>
            </div>

        {/* Our Partners */}

        <div className='h-full w-full bg-white px-6 pt-5'>
                 <h1 className='text-4xl text-blue-950 text-center font-semibold '>Our Partners</h1>
            <Marquee speed={100} pauseOnHover>
            <div className='flex items-center space-x-10 mx-8 pt-5'>
                
                <div className=''>
                    <img className='mx-auto w-52' src="image/paloalto.png" alt="" />
                </div>
                <div className=''>
                    <img className='mx-auto w-52' src="image/microsoft.png" alt="" />
                </div>
                <div className=''>
                    <img className='mx-auto w-52' src="image/cyberoam.jpg" alt="" />
                </div>
                <div className=''>
                    <img className='mx-auto w-52' src="image/nexus.jpg" alt="" />
                </div>
                <div className=''>
                    <img className='mx-auto w-52' src="image/qacademy.png" alt="" />
                </div>
                <div className=''>
                    <img className='mx-auto w-52' src="image/dell.png" alt="" />
                </div>
                <div className=''>
                    <img className='mx-auto w-52' src="image/hp.jpg" alt="" />
                </div>
                <div className=''>
                    <img className='mx-auto w-52' src="image/Siemon.png" alt="" />
                </div>
                
            </div>
            </Marquee>
        </div>
        </div>

        </>
    )
}
