import React from 'react';
import '../css/NewsBox.css';
import {Link} from 'react-router-dom';
export default function NewsBox(props) {
  return (
    <>
    <div className='container newsbox'>
      <Link to={"/stories/"+props.id}>
      <div className="img-container">
        <img src={require('../img/'+props.src)} alt="img" className='story-img'/>
      </div>
      <h5 className='title'>{props.title}</h5>
      <p className='text'>{props.text}</p>
      </Link>
    </div>
    </>
  ) 
}
