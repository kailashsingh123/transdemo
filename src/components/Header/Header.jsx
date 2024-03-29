import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import {IoArrowForwardCircleOutline, IoMailUnreadOutline} from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { TiPlus, TiMinus } from "react-icons/ti";






export function Header(props) {

  const [menu, setMenu] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }
    

    return (
      <>
        <header>
          <nav className='p-5 fixed z-50 mx-auto my-auto  w-full bg-white shadow md:flex md:items-center md:justify-between'>
            <div className='flex justify-between items-center'>
               <Link to="/">
             <span>    
                 <img src="image/logo.png" alt="logo" className='h-16 '  />
            </span>
               </Link>
               
              <button className='flex text-3xl cursor-pointer md:hidden'
               onClick={handleClick}
              >
              {menu ? <IoMdClose/> : <FaBars/>}
              </button>
            </div>
            <div className=''>

             <ul className={`md:flex md:items-center space-x-4 md:pb-0 pt-4 pb-5 text-blue-950 absolute md:static bg-white opacity-95  z-10 left-0 w-40 md:w-auto md:pl-0 py-5 pl-9 transition-all duration-500 transform ease-in ${menu ? 'left-0' : 'top-[-490px]'} `}>
                <li className='mx-1 my-2 md:my-2'><NavLink to="/">HOME</NavLink></li>
                <li className='mx-1 my-2 md:my-2'><NavLink to="/about">ABOUT</NavLink></li>
                <li onClick={() => setIsOpen((prev) => !prev)} className='mx-1 my-3 md:my-2 inline-flex cursor-pointer'>SERVICES
                  {!isOpen ? (<TiPlus />) : (<TiMinus />)}
                
{/*             Drop Down Button */}
               {isOpen && (<div className='bg-white absolute overflow-hidden top-20 flex flex-col p-3 w-52 rounded-bl-3xl rounded-br-3xl'>
                <ul className='space-y-6'>
                     <li className=''><NavLink to="/securingpeople">Securing People</NavLink></li>
                     <li className=''><NavLink to="/securingprocess">Securing Process</NavLink>{}</li>
                     <li className=''><NavLink to="/">Securing Technology</NavLink>{}</li>
                     <li className=''><NavLink to="/">Securing Things</NavLink>{}</li>
                     <li className=''><NavLink to="/">Securing Data</NavLink>{}</li>
                     
                </ul>
                </div>
                                        )}
                </li>
               {/* ------------------- */}
                
                <li className='mx-1 my-2 md:my-2'><NavLink to="/">SOLUTIONS</NavLink></li>
                <li className='mx-1 my-2 md:my-2'>BLOG</li>
                <li className='mx-1 my-2 md:my-2'>CONTACT</li>
                <li className='mx-1 my-2 md:my-2'>WORK WITH US</li>
              </ul>

              
              
              
            </div>            
          </nav>
        </header>
           
        </>
    )
}
