import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar'
import '../css/Contact.css'

function Contact() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var text;
    const handleError = () =>{
        console.log("error");
    }
  return (
    <>
    <Navbar/>
        <div className='container-fluid contact'>
            <h1>Share your feedback!</h1>
            <div className='container' id='input'>
                <ContactForm/>
            </div>

        </div>

        
    </>
  )
}

export default Contact