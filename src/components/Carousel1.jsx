import { useEffect, useState } from 'react'
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline} from "react-icons/io5";

import image1 from "/image/bnr-1.jpg"
import image2 from "/image/bnr-2.jpg"
import image3 from "/image/bnr-3.jpg"

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
        },3000)
    },[])


    useEffect(()=>{
        setInterval(()=>{
            setSelectedTitle(selectedTitle=> selectedTitle < 2 ? selectedTitle+1 : 0)
        },3000)
    },[])

    useEffect(()=>{
        setInterval(()=>{
            setSelectedDesc(selectedTitle=> selectedTitle < 2 ? selectedTitle+1 : 0)
        },3000)
    },[])
    

    return (
        <>
          <div className='overflow-hidden relative h-full z-0 m-0 p-0  w-[100%]'>
          
            <div className='flex transition-transform ease-out duration-3000'>
            <img src={allImage[selectedImage]} alt="" className='' />
            <div className='absolute inset-0 flex align-text-top justify-between p-4 text-white'>
               <h1 className=' font-bold text-4xl sm:text-6xl sm:w-1/2 sm:py-3 min-h-20'>{allTitle[selectedTitle]}</h1>
            </div>
            <div className='absolute inset-0 flex top-28 lg:top-36 sm:w-1/2 justify-between p-4 text-white'>
                <p className='text-lg sm:xl text-justify'>{allDesc[selectedDesc]}</p>
            </div>
               
                            
               {/* {items.map((item) => {    
                <div>{item.description[selected]}</div>
                })} */}
            

            

                </div>
            


            <div className='absolute inset-0 flex items-center justify-between p-4 text-white '>
            <button className='text-4xl' 
            onClick={ ()=> {
                if (selectedImage < allImage.length-1)
                setSelectedImage(selectedImage+1)
            }}
            ><IoArrowBackCircleOutline />
            </button>
            <button className='text-4xl'
            onClick={ ()=> {
                if (selectedImage > 0)
                setSelectedImage(selectedImage-1)
            }}
            ><IoArrowForwardCircleOutline />
            </button>
            </div>

            {/* <div className='absolute bottom-4 right-0 left-0 '>
                <div className='flex items-center justify-center gap-2 '>
                    {allImage.map((_, i) => (
                <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${selectedImage === i ? "p-2" : "bg-opacity-20"} `} />
                    ))}
                </div>
            </div> */}

          </div>  
        </>
    )
}
