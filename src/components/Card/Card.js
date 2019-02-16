import React from 'react';
import './Card.css';
import HourlyForcast from '../HourlyForcast/HourlyForcast';

export default function Card({ date, hourlyForcast }) {
  const cssClass = date.active ? 'card-active' : 'card';
  return (
    <div className='card-container'>
      <div className={cssClass} onClick={() => { hourlyForcast(date.id) }}>
        <p>{date.day}</p>
        <img src='http://openweathermap.org/img/w/10d.png' alt="weather-img" />
        <p><span>{date.highestTemp}&deg;</span> {date.lowestTemp}&deg;</p>
      </div>
      <HourlyForcast active={date.active} hours={date.hours}/>
    </div>
  )
}


