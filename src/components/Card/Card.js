import React from 'react';
import img from './download.png';
import './Card.css';

export default function Card() {
  return (
    <div className='card card-focused'>
        <p>Wed</p>
        <img src={img} alt="weather image"/>
        <p><span>60&deg;</span> 70&deg;</p>
    </div>
  )
}


