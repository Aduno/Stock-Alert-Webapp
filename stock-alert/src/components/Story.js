import React from 'react'

import '../css/Story.css'
export default function Story(props) {
  return (
    // Title
    <div className='container-fluid story'>
      <h1 className='story-title'>{props.title}</h1>
      <p className='date'>{props.date}</p>
      <p className='author'>{props.author}</p>
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
