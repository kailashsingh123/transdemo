import React from 'react'

export function Contactform(props) {
    

    return (
        <>

        <div class="container h-full w-full">
        <form action="action_page.php">
            <div className='py-2'>
            <label for="fname"></label>
            <input className='h-12 w-1/2 border border-green-500 px-5 ' type="text" id="fname" name="firstname" placeholder="Enter Name"></input>
            <label for="lname"></label>
            <input className='h-12 w-1/2 border border-green-500 px-5 ' type="text" id="lname" name="lastname" placeholder="Enter Email"></input>
            </div>
            <div className='py-2'>
            <input className='h-10 w-full border border-green-500 px-5' type="number" id="mobile" name="mobilenumber" placeholder="Enter Mobile"></input>
            </div>
            <div className='py-2'>
            <label for="country"></label>
            <select className='h-10 w-full border border-green-500 px-5' id="requirement" name="Select Requirement" placeholder="Select Requirement">
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
            <textarea className='h-24 w-full border border-green-500 px-5' id="subject" name="subject" placeholder="Enter Your Message" ></textarea>
            </div>
            <div className='flex py-2 space-x-2'>
            <input className='h-5 w-5' type="checkbox" id="checkbox" name="checkbox" value="privacy policy"></input>
            <label for="checkbox">I understand and agree to the Privacy & Policy of STALLION IT SECURITIES</label>
            </div>
            <div>
            <input className=' text-white text-[16px] font-semibold text-center py-3 sm:py-4 sm:h-14 h-12 w-full bg-gradient-to-r from-secondary to-primary rounded-full text-lg ' type="submit" value="Submit"></input>
            </div>

        </form>
        </div>

            
        </>
    )
}
