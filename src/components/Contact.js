import React from 'react'
import { Form } from 'react-bootstrap'

const Contact = () => {
    return (
        <div className='contact_container'>
            <p className='contact_message'>Do you have something you would like to share with us, we are always here for you.</p>
            <h1>Contact Us!</h1>
            <p>Telephone: <a href='#tel'>+0123456789</a></p>
            <Form className='form_section'>
                <label>
                    <p className='form_paragraph' >Name:</p>
                    <input className='form_email' type="text" name="name" placeholder='Enter your Name'/>
                </label>
                <label>
                    <p className='form_paragraph' >Email address:</p>
                <input className='form_email' type="email" name="email" placeholder='Enter your email address'/>
                </label>
                <label>
                    <p className='form_paragraph' >Tell us what you think!!!</p>
                <textarea className='form_fieldText' type="textarea" placeholder='Enter your request'/>
                </label>
                <input type="submit" value="Submit" />

            </Form>
            
        </div>
    )
}

export default Contact
