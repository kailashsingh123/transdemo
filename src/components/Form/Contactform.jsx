import React from 'react'

export function Contactform(props) {
    

    return (
        <>

        <div class="container h-full w-full">
        <form action="https://formspree.io/f/xoqgpwzj" method='POST'>
            <div className='py-2'>
            <label for="fname"></label>
            <input className='h-12 w-1/2 border border-green-500 px-5 ' type="text" id="" name="Name" placeholder="Enter Name" required></input>
            <label for="lname"></label>
            <input className='h-12 w-1/2 border border-green-500 px-5 ' type="text" id="" name="Email-id" placeholder="Enter Email" required></input>
            </div>
            <div className='py-2'>
            <input className='h-10 w-full border border-green-500 px-5' type="number" id="" name="Mobile" placeholder="Enter Mobile" required></input>
            </div>
            <div className='py-2'>
            <label for="country"></label>
            <select className='h-10 w-full border border-green-500 px-5' id="" name="Requirement" placeholder="Select Requirement" required>
            <option value="">Select Requirement</option>
            <option value="Securing People">Securing People</option>
            <option value="Securing Process">Securing Process</option>
            <option value="Securing Technology">Securing Technology</option>
            <option value="Securing Things">Securing Things</option>
            <option value="Securing Data">Securing Data</option>
            </select>
            </div>
            <div className='py-2'>
            <label for="subject"></label>
            <textarea className='h-24 w-full border border-green-500 px-5' id="" name="Message" placeholder="Enter Your Message"  required></textarea>
            </div>
            <div className='flex py-2 space-x-2'>
            <input className='h-5 w-5' type="checkbox" id="checkbox" name="checkbox" value="Privacy Policy" required></input>
            <label for="checkbox">I understand and agree to the Privacy & Policy of STALLION IT SECURITIES</label>
            </div>
            <div>
            <input className=' text-white text-[16px] font-semibold text-center py-3 sm:py-4 sm:h-14 h-12 w-full bg-gradient-to-r from-secondary to-primary rounded-full text-lg ' type="submit" value="send"></input>
            </div>

        </form>
        </div>

            
        </>
    )
}
