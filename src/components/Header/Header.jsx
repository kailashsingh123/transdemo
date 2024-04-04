import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import {IoArrowForwardCircleOutline, IoMailUnreadOutline} from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { TiPlus, TiMinus } from "react-icons/ti";
import { FaRegArrowAltCircleRight } from "react-icons/fa";






export function Header(props) {

  const [menu, setMenu] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }

function handleMouseEnter() {
  setIsOpen(true);
}

function handleMouseLeave() {
  setIsOpen(false);
}
    

    return (
      <>
        <header>
          <nav className='flex py-2 pl-7 fixed z-50 mx-auto my-auto  w-full bg-indigo-950
           shadow md:items-center md:justify-between'>
            <div className='w-[60%] sm:w-[25%] flex justify-between items-center'>
               <Link to="/">
             <span>    
                 <img src="image/logo1.jpeg" alt="logo" className='h-24 w-60'  />
            </span>
               </Link>
               
              {/* <button className='flex text-3xl text-amber-200 cursor-pointer md:hidden'
               onClick={handleClick}
              >
              {menu ? <IoMdClose/> : <FaBars/>}
              </button> */}


            </div>
            <div className='flex justify-between items-left'>

             <ul className={`lg:flex md:flex md:items-center lg:items-left space-x-8 md:pb-0 py-1 text-amber-200 absolute md:static bg-indigo-950 opacity-95  z-10 left-0 w-40 md:w-full md:pl-0  lg:pl-24 transition-all duration-500 transform ease-in ${menu ? 'left-0 top-28' : 'top-[-490px]'} `}>


             {/* <ul className={`flex bg-indigo-950 text-amber-200 justify-end pl-24 space-x-8 `} >
               */}
                <li className='mx-1 my-2 md:my-2 pl-7'><NavLink to="/"
                >HOME</NavLink></li>
                <li className='mx-1 my-2 md:my-2'><NavLink to="/about">ABOUT</NavLink></li>
                <li  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='mx-1 my-3 md:my-2 w-16 pb-6 h-6 bg:yellow-950 cursor-pointer  hover:underline-offset-[3px]'>SERVICES
                  {/* {!isOpen ? (<TiPlus />) : (<TiMinus />)} */}
                
{/*             Drop Down Button */}
               {isOpen && (<div className='bg-indigo-950 absolute overflow-hidden top-10 flex flex-col p-3 w-52 rounded-bl-2xl rounded-br-2xl'>
                <ul className='space-y-6'>
                     <li className=''><NavLink to="/securingpeople">Securing People</NavLink></li>
                     <li className=''><NavLink to="/securingprocess">Securing Process</NavLink>{}</li>
                     <li className=''><NavLink to="/securingtechnology">Securing Technology</NavLink>{}</li>
                     <li className=''><NavLink to="/securingthings">Securing Things</NavLink>{}</li>
                     <li className=''><NavLink to="/securingdata">Securing Data</NavLink>{}</li>
                     
                </ul>
                </div>
                                        )}
                </li>
               {/* ------------------- */}
                
                <li className='mx-1 my-2 md:my-2'><NavLink to="/solutions">SOLUTIONS</NavLink></li>
                <li className='mx-1 my-2 md:my-2'><NavLink to="/contact">CONTACT</NavLink></li>
                <li className='mx-1 my-2 md:my-2 text-nowrap'>WORK WITH US</li>
              </ul>
              </div> 

              {/*  Icons  */}

             <div className=' w-[40%] sm:w-[20%] flex text-3xl cursor-pointer text-amber-200 space-x-4 justify-end  sm:justify-center px-4 '>
              
              <button className=' '><FaRegArrowAltCircleRight /></button>
              <button className='md:hidden'
               onClick={handleClick}
              >
              {menu ? <IoMdClose/> : <FaBars/>}
              </button>
              </div>

              {/*  Icons  */}
              
                       
          </nav>
        </header>
           
        </>
    )
}
