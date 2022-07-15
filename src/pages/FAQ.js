import React from 'react'

import { LanguageContext } from '../Apps';
import Navbar from '../components/Navbar';
import '../css/FAQ.css';

import {faqEn, faqFr} from '../data/FAQData'

function FAQ(props) {
  return (
    <LanguageContext.Consumer>{(language)=>(
    <>
    <Navbar languageToggle={props.languageToggle}/>
    <div className='container faq'>
      {(language==='En'? faqFr: faqEn)}
    </div>
    </>
    )}</LanguageContext.Consumer>
    
  )
}

export default FAQ