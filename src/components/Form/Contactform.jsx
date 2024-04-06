import React from 'react'

export function Contactform(props) {
    

    return (
        <>

        <div class="container">
        <form action="action_page.php">
            <div className='space-x-5'>
            <label for="fname"></label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            <label for="lname"></label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
            </div>
            <div>
            <input type="number" id="mobile" name="mobilenumber" placeholder="Enter Mobile...."></input>
            </div>
            <div>
            <label for="country"></label>
            <select id="requirement" name="Select Requirement" placeholder="Select Requirement">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            </select>
            </div>

            <label for="subject"></label>
            <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

            <input type="submit" value="Submit"></input>

        </form>
        </div>

            
        </>
    )
}
