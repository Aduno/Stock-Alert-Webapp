import React, { lazy, Suspense, useState } from 'react'
import NewsBox from './NewsBox'
import Story from './Story'
import '../css/News.css'

import { stories } from '../data/NewsStory'
import { Button, Modal } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";

import { propTypes } from 'react-bootstrap/esm/Image'


export default function News() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Button onClick={handleShow}>
          Subscribe to our newsletter
        </Button>
      </div>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
