import React from 'react'

import '../css/Story.css'
export default function Story(props) {
  return (
    // Title
    <div className='container-fluid story'>
      <div className='header'>
        <h1 className='story-title'>{props.title}</h1>
        <p className='date'>Date: {props.date}</p>
        <p className='author'>Author: {props.author}</p>
      </div>
      <div className='img-container'>
        <img src={require('../img/'+props.src)} className='main-img'/>
      </div>
      <div className='story-text'>
        <p>{props.children}</p>
      </div>
    </div>

    // Comment section?
  )
}
