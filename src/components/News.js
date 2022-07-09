import React, { lazy, Suspense, useState } from 'react'
import NewsBox from './NewsBox'
import '../css/News.css'

import { stories } from '../data/NewsStory'
import { Button, Form, Modal } from 'react-bootstrap'



export default function News() {

  const [sub, setSub] = useState(false);
  const [subConfirm, setSubConfirm] = useState(false);

  const handleSubClose = () => setSub(false);
  const handleSubShow = () => setSub(true);
  const subConfirmTransition= () => {
    handleSubClose();
    subConfirmShow();
  }
  const subConfirmClose = () => setSubConfirm(false);
  const subConfirmShow = () => setSubConfirm(true);
 


  return (
    <>
    <div id='stories' className='container-fluid'>
      <h1 id="news-title">Top Stories</h1>

      {/* // Newsboxes */}
      <NewsBox src={stories[0]['img']} title={stories[0]['title']} text={stories[0]['text'].substring(0,200)+'...'} id='0'></NewsBox>
      <NewsBox src={stories[1]['img']} title={stories[1]['title']} text={stories[1]['text'].substring(0, 200)+'...'} id='1'></NewsBox>
      <NewsBox src={stories[2]['img']} title={stories[2]['title']} text={stories[2]['text'].substring(0,200)+'...'} id='2'></NewsBox>

      {/* // Subscription btn */}
      <div className="col text-center sub-btn">
        <Button onClick={handleSubShow}>
          Subscribe to our newsletter
        </Button>
      </div>
    </div>
    <Modal show={sub} onHide={handleSubClose}>
        <Modal.Header closeButton>
          <Modal.Title>Newsletter Sign-up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row justify-content-center'>
            <input className='col-11 user-input' type='name' placeholder='Full name'/>
            <input className= 'col-11 user-input' type='email' placeholder='Email'/>
            <Form className='col-11 row'>
              <div key={`inline-$checkbox`} className="mb-3">
                <Form.Check
                  className='col-5'
                  inline
                  label="Agriculture"
                  name="group1"
                  type='checkbox'
                  id={`inline-checkbox-1`}
                />
                <Form.Check
                className='col-5'
                  inline
                  label="Banking"
                  name="group1"
                  type='checkbox'
                  id={`inline-checkbox-2`}
                />
                <Form.Check
                className='col-5'
                  inline
                  label="Energy"
                  type='checkbox'
                  id={`inline-checkbox-3`}
                />
                <Form.Check
                className='col-5'
                  inline
                  label="Engineering"
                  type='checkbox'
                  id={`inline-checkbox-4`}
                />
                <Form.Check
                className='col-5'
                  inline
                  label="Insurance"
                  type='checkbox'
                  id={`inline-checkbox-5`}
                />
                <Form.Check
                className='col-5'
                  inline
                  label="Mining"
                  type='checkbox'
                  id={`inline-checkbox-6`}
                />
                <Form.Check
                className='col-5'
                  inline
                  label="Software"
                  type='checkbox'
                  id={`inline-checkbox-7`}
                />
                <Form.Check
                className='col-5'
                  inline
                  label="Telecom"
                  type='checkbox'
                  id={`inline-checkbox-8`}
                />
              </div>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSubClose}>
            Close
          </Button>
          <Button className='primary' variant="primary" onClick={subConfirmTransition}>
            Subscribe
          </Button>
        </Modal.Footer>
        </Modal>
        <Modal show={subConfirm} onHide={subConfirmClose}>
            <Modal.Header closeButton>
              <Modal.Title>Subscribed!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You have subscribed to our newsletter. Thank you!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={subConfirmClose}>
                  Close
                </Button>
            </Modal.Footer>
          </Modal>
    </>
  )
}
