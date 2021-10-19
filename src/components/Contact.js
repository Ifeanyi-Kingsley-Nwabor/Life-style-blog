import React from 'react'
import { Form } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <p className='contact_message'>Do you have something you would like to share with us, we are always here for you.</p>
            <h1>Contact Us!</h1>
            <p>Telephone: <a href='#tel'>+0123456789</a></p>
            <form className='form_section'>
                <label>
                    Name:
                    <input type="text" name="name" placeholder='Enter your Name'/>
                </label>
                <input className='form_email' type="email" name="email" placeholder='Enter your email address'/>
                <textarea className='form_fieldText' type="textarea" placeholder='Enter your request'/>
                <input type="submit" value="Submit" />

            </form>
            
        </div>
    )
}

export default Contact
