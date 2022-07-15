import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { LanguageContext } from '../Apps';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar'
import '../css/Contact.css'

function Contact(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var text;
    const handleError = () =>{
        console.log("error");
    }
  return (
    <LanguageContext.Consumer>{(language)=>(
    <>
        <Navbar languageToggle={props.languageToggle}/>
            <div className='container-fluid contact'>
                <h1>{language==='En'? 'Partagez vos commentaires!':'Share your feedback!'}</h1>
                <div className='container' id='input'>
                    <ContactForm/>
                </div>
            </div>
    </>
    )}</LanguageContext.Consumer>
  )
}

export default Contact