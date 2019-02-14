import React from 'react';
import img from './download.png';
import hourlyForcast from '../HourlyForcast/HourlyForcast';
import './Card.css';
import HourlyForcast from '../HourlyForcast/HourlyForcast';

export default function Card({ date, hourlyForcast }) {
  const cssClass = date.active ? 'card-active' : 'card';
  return (
    <div>
      <div className={cssClass} onClick={() => { hourlyForcast(date.id) }}>
        <p>{date.day}</p>
        <img src={img} alt="weather image" />
        <p><span>{date.highestTemp}&deg;</span> {date.lowestTemp}&deg;</p>
      </div>
      <HourlyForcast active={date.active} hours={date.hours}/>
    </div>
  )
}


