import React, { lazy, Suspense, useState } from 'react'
import NewsBox from './NewsBox'
import Story from './Story'
import '../css/News.css'

import { stories } from '../data/NewsStory'
import { Button, Form, Modal } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";

import { propTypes } from 'react-bootstrap/esm/Image'


export default function News() {

  const [sub, setSub] = useState(false);
  const handleSubClose = () => setSub(false);
  const handleSubShow = () => setSub(true);

  return (
    <>
    <div className='container-fluid'>
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
          <Modal.Title>Newsletter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row justify-content-center'>
            <input className='col-11' type='name' placeholder='Full name'/>
            <input className= 'col-11' type='email' placeholder='Email'/>
            <Form className='col-11'>
              <div key={`inline-$checkbox`} className="mb-3">
                <Form.Check
                  inline
                  label="Agriculture"
                  name="group1"
                  type='checkbox'
                  id={`inline-checkbox-1`}
                />
                <Form.Check
                  inline
                  label=""
                  name="group1"
                  type='checkbox'
                  id={`inline-checkbox-2`}
                />
                <Form.Check
                  inline
                  label="3"
                  type='checkbox'
                  id={`inline-checkbox-3`}
                />
                <Form.Check
                  inline
                  label="4"
                  type='checkbox'
                  id={`inline-checkbox-4`}
                />
                <Form.Check
                  inline
                  label="5"
                  type='checkbox'
                  id={`inline-checkbox-5`}
                />
                <Form.Check
                  inline
                  label="6"
                  type='checkbox'
                  id={`inline-checkbox-6`}
                />
              </div>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSubClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
