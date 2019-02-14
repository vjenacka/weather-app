import React from 'react';
import img from './download.png';
import './Card.css';

export default function Card({date,hourlyForcast}) {
  const cssClass= date.active? 'card-active':'card';
  return (
    <div className={cssClass} onClick={()=>{hourlyForcast(date.id)}}>
        <p>{date.day}</p>
        <img src={img} alt="weather image"/>
        <p><span>{date.highestTemp}&deg;</span> {date.lowestTemp}&deg;</p>
    </div>
  )
}


