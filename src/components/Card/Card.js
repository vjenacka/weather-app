import React from 'react';
import img from './download.png';
import './Card.css';

export default function Card({date}) {
  return (
    <div className={`card`}>
        <p>{date.day}</p>
        <img src={img} alt="weather image"/>
        <p><span>{date.highestTemp}&deg;</span> {date.lowestTemp}&deg;</p>
    </div>
  )
}


