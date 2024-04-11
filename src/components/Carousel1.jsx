import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline} from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';

import image1 from "/image/bnr-1.jpg"
import image2 from "/image/bnr-2.jpg"
import image3 from "/image/bnr-3.jpg"
import { Home } from './Home';

const title1 = "Secure Your Business Enablers"
const title2 = "Safeguard Your Business Enablers"
const title3 = "Protect Your Business Enablers"

const desc1 = "We enable organizations to secure their engines of growth – business enablers through our quality and globally recognized cybersecurity services and solutions."
const desc2 = "We equip organization to prepare and safeguard themselves from the Digital Risk through our globally accepted cyber risk management services and solutions."
const desc3 = "We empower organization to protect themselves from the security incidents and data breaches through our highly rated cyber security services and solutions."

export function Carousel1(props) {

    const [selectedImage, setSelectedImage] = useState(0)
    const [selectedTitle, setSelectedTitle] = useState(0)
    const [selectedDesc, setSelectedDesc] = useState(0)
    const [allDesc, setAllDesc] = useState([desc1, desc2, desc3])
    const [allTitle, setAllTitle] = useState([title1, title2, title3])
    const [allImage, setAllImage] = useState([image1, image2, image3])
  

    useEffect(()=>{
        setInterval(()=>{
            setSelectedImage(selectedDesc=> selectedDesc < 2 ? selectedDesc+1 : 0)
        },7500)
    },[])


    useEffect(()=>{
        setInterval(()=>{
            setSelectedTitle(selectedTitle=> selectedTitle < 2 ? selectedTitle+1 : 0)
        },7500)
    },[])

    useEffect(()=>{
        setInterval(()=>{
            setSelectedDesc(selectedTitle=> selectedTitle < 2 ? selectedTitle+1 : 0)
        },7500)
    },[])
    

    return (
        <>
        
          <div className='overflow-hidden relative h-full w-full z-0 m-0 p-0'>
          
            <div className='flex transition-transform ease-out duration-3000'>
            <img src={allImage[selectedImage]} alt="" className='h-96 sm:h-[510px] w-full' />
            <div className='absolute inset-0 flex align-text-top justify-between p-4 text-white'>
               <h1 className=' ps-6 font-bold text-4xl sm:text-6xl lg:w-1/2 sm:py-3 min-h-20'>{allTitle[selectedTitle]}</h1>
            </div>
           
            <div className='absolute inset-0 flex top-24 md:top-32 lg:top-40 lg:w-1/2 justify-between p-4 text-white'>
                <p className=' ps-6 font-bold text-2xl text-primary text-justify'>
                        <TypeAnimation
                        sequence={[
                            'People Process Technology Data and Things',
                            1000, 
                            'Assess and Mitigate your Digital Risk',
                            1000,
                            'Detect Respond and Recover from Incidents',
                            1000
                        ]}
                        wrapper="span"
                        speed={25}
                        repeat={Infinity}/>
                </p>
            </div>

            <div className='absolute inset-0 flex top-40 lg:top-60 lg:w-1/2 justify-between p-4 text-white'>
                <p className=' ps-6 text-lg sm:text-xl text-justify'>{allDesc[selectedDesc]}</p>
            </div>

            {/* <div className='absolute inset-0 top-64 md:top-2/3 px-10 py-10 sm:py-8 text-white' >
            <button className=' text-white text-[16px] font-semibold text-center py-3 sm:py-4 sm:w-44 sm:h-14 h-12 w-40 bg-gradient-to-r from-secondary to-primary rounded-full cursor-pointer'><Link to="/securingpeople">Learn More<span>..</span></Link></button>
            </div> */}
               
                            
               {/* {items.map((item) => {    
                <div>{item.description[selected]}</div>
                })} */}
            

            

            </div>
            


            <div className='absolute inset-0 flex items-center justify-between p-4 text-white '>
            <button className='text-4xl hidden sm:block' 
            onClick={ ()=> {
                if (selectedImage < allImage.length-1)
                setSelectedImage(selectedImage+1)
            }}
            ><IoArrowBackCircleOutline />
            </button>
            <button className='text-4xl hidden sm:block'
            onClick={ ()=> {
                if (selectedImage > 0)
                setSelectedImage(selectedImage-1)
            }}
            ><IoArrowForwardCircleOutline />
            </button>
            </div>

            <div className='absolute left-0 right-0 bottom-3 sm:bottom-10 '>
                <div className='flex items-left justify-left ps-12  gap-2 '>
                    {allImage.map((_, i) => (
                <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${selectedImage === i ? "p-0" : "bg-opacity-20"} `} />
                    ))}
                </div>
            </div>

          </div> 
          <div className='absolute inset-0 top-[360px] md:top-[450px] lg:top-[440px] px-10 py-10 sm:py-8 text-white' >
            <button className=' text-white text-[16px] font-semibold text-center py-3 sm:py-4 sm:w-44 sm:h-14 h-12 w-40 bg-gradient-to-r from-secondary to-primary rounded-full cursor-pointer'><Link to="/securingprocess">Learn More<span>..</span></Link></button>
          </div> 
        </>
    )
}
