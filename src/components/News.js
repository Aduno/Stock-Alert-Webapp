import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import NewsBox from './NewsBox'
import '../css/News.css'

import { stories, storiesFr } from '../data/NewsStory'
import { Button, Form, Modal } from 'react-bootstrap'
import { LanguageContext } from '../Apps'



export default function News(props) {
  let language = props.lang;

  useEffect(()=>{
    language = props.lang;
  }, props.lang)
  const [sub, setSub] = useState(false);
  const [subConfirm, setSubConfirm] = useState(false);

  const newsEmail = useRef(null);
  const name = useRef(null);

  const handleSubClose = () => setSub(false);
  const handleSubShow = () => setSub(true);
  const subConfirmTransition= () => {
    if(newsEmail.current.value===""&&name.current.value===""){
      if(language!=='En') alert("Please enter your name and email");
      else alert("Veuillez saisir votre nom et votre email")
    }
    else if (newsEmail.current.value===""){
      if(language!=='En') alert("Enter your email address");
      else alert("Entrez votre adresse email")
    } 
    else if (name.current.value===""){
      if(language!=='En') alert("Enter your name");
      else alert("Entrez votre nom")
    }
    else if(count===0){
      if(language!=='En') alert("Please select at least one category");
      else alert("Veuillez sélectionner au moins une catégorie");
    }
    else{
      handleSubClose();
      subConfirmShow();
    }
  }
  const subConfirmClose = () => setSubConfirm(false);
  const subConfirmShow = () => setSubConfirm(true);
 
  const formTable = new Map();
  let result = '';
  let count = 0;

  const counterEvent = (e) =>{
    result = formTable.get(e.target.id);
    if(result===undefined){
      formTable.set(e.target.id, true)
      count++;
    }
    else if(result===true){
      formTable.set(e.target.id, false);
      count--;
    }
    else if(result===false){
      formTable.set(e.target.id,true);
      count++;
    }
  }


  return (
    <LanguageContext.Consumer>{(language)=>(
    <>
    <div id='stories' className='container-fluid'>
      <h1 id="news-title">{(language=='En'? 'Meilleures histoires': 'Top Stories')}</h1>

      {/* // Newsboxes */}
      {language==='En'? <NewsBox src={stories[0]['img']} title={storiesFr[0]['title']} text={storiesFr[0]['text'].substring(0,200)+'...'} id='0'></NewsBox>:<NewsBox src={stories[0]['img']} title={stories[0]['title']} text={stories[0]['text'].substring(0,200)+'...'} id='0'></NewsBox>}
      {language==='En'? <NewsBox src={stories[1]['img']} title={storiesFr[1]['title']} text={storiesFr[1]['text'].substring(0,200)+'...'} id='1'></NewsBox>:<NewsBox src={stories[1]['img']} title={stories[1]['title']} text={stories[1]['text'].substring(0,200)+'...'} id='1'></NewsBox>}
      {language==='En'? <NewsBox src={stories[2]['img']} title={storiesFr[2]['title']} text={storiesFr[2]['text'].substring(0,200)+'...'} id='2'></NewsBox>:<NewsBox src={stories[2]['img']} title={stories[2]['title']} text={stories[2]['text'].substring(0,200)+'...'} id='2'></NewsBox>}

      {/* // Subscription btn */}
      <div className="col text-center sub-btn">
        <Button onClick={handleSubShow}>
        {(language=='En'? 'Abonnez-vous à notre newsletter': 'Subscribe to our newsletter')}
        </Button>
      </div>
    </div>
    <Modal show={sub} onHide={handleSubClose}>
        <Modal.Header closeButton>
          <Modal.Title>{(language=='En'? 'Inscription à la newsletter': 'Newsletter Sign-up')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row justify-content-center'>
            <input className='col-11 user-input' type='name' placeholder={(language=='En'? 'Nom et prénom': 'Full name')} ref={name}/>
            <input className= 'col-11 user-input' type='email' placeholder='E-mail' ref={newsEmail}/>
            <Form className='col-11 row'>
              <div key={`inline-$checkbox`} className="mb-3">
                <Form.Check
                  className='col-5'
                  inline
                  label="Agriculture"
                  name="group1"
                  type='checkbox'
                  id={`inline-checkbox-1`}
                  onClick={counterEvent}
                />
                <Form.Check
                className='col-5'
                  inline
                  label={(language=='En'? 'Bancaire': 'Banking')}
                  name="group1"
                  type='checkbox'
                  id={`inline-checkbox-2`}
                  onClick={counterEvent}
                />
                <Form.Check
                className='col-5'
                  inline
                  label={(language=='En'? 'Energie': 'Energy')}
                  type='checkbox'
                  id={`inline-checkbox-3`}
                  onClick={counterEvent}
                />
                <Form.Check
                className='col-5'
                  inline
                  label={(language=='En'? 'Ingénierie': 'Engineering')}
                  type='checkbox'
                  id={`inline-checkbox-4`}
                  onClick={counterEvent}
                />
                <Form.Check
                className='col-5'
                  inline
                  label={(language=='En'? 'Assurance': 'Insurance')}
                  type='checkbox'
                  id={`inline-checkbox-5`}
                  onClick={counterEvent}
                />
                <Form.Check
                className='col-5'
                  inline
                  label={(language=='En'? 'Exploitation minière': 'Mining')}
                  type='checkbox'
                  id={`inline-checkbox-6`}
                  onClick={counterEvent}
                />
                <Form.Check
                className='col-5'
                  inline
                  label={(language=='En'? 'Logiciel': 'Software')}
                  type='checkbox'
                  id={`inline-checkbox-7`}
                  onClick={counterEvent}
                />
                <Form.Check
                className='col-5'
                  inline
                  label={(language=='En'? 'Télécom': 'Telecom')}
                  type='checkbox'
                  id={`inline-checkbox-8`}
                  onClick={counterEvent}
                />
              </div>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSubClose}>
          {language=='En'? 'Fermer':'Close'}
          </Button>
          <Button className='primary' variant="primary" onClick={subConfirmTransition}>
          {language=='En'? "S'abonner":'Subscribe'}
          </Button>
        </Modal.Footer>
        </Modal>
        <Modal show={subConfirm} onHide={subConfirmClose}>
            <Modal.Header closeButton>
              <Modal.Title>{language=='En'? "Abonné!":'Subscribed!'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {language=='En'? "Vous êtes inscrit à notre newsletter. Merci!":'You have subscribed to our newsletter. Thank you!'}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={subConfirmClose}>
                {language=='En'? 'Fermer':'Close'}
              </Button>
            </Modal.Footer>
          </Modal>
    </>
    )}</LanguageContext.Consumer>
  )
}
