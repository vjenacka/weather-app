import React from 'react';
import './Card.css';
import HourlyForcast from '../HourlyForcast/HourlyForcast';

export default function Card({ date, hourlyForcast }) {
  //returns the icon index of the highest temp that day
  const imgIndex= date.temps.indexOf(Math.max(...date.temps));
  return (
    <div className='card-container'>
      <div className='card'>
        <p>{date.dayInText}</p>
        <img src={'http://openweathermap.org/img/w/'+date.icons[imgIndex]+'.png'} alt="weather-img" />
        <p><span>{Math.max(...date.temps)}&deg;</span> {Math.min(...date.temps)}&deg;</p>
      </div>
    </div>
  )
}


