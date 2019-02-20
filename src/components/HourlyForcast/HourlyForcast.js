import React from 'react';
import './HourlyForcast.css';
import { Link } from 'react-router-dom';

const HourlyForcast = ({ match, forcast }) => {
    //gets the id of the day from route params
    let id = Number(match.params.day_id);
    let day = forcast.find(days => {
        return days.id === id
    })

    const { hours, temps, icons } = day;
    //outputs the list of each hour
    const list = hours.map((hour, index) => {
        return <li key={Math.floor(Math.random() * 5000)}>
            <p>{hour}:00</p>
            <p className='hr-Temp'>{temps[index]}&deg;</p>
            <img src={'http://openweathermap.org/img/w/' + icons[index] + '.png'} alt="weather-img" />
        </li>
    })

    return (
        <div className='hourly-forcast'>
            <h3>Hourly forcast for {day.dayInText}</h3>
            <ul>
                {list}
            </ul>
            <Link to='/'>Choose another day...</Link>
        </div>
    )

}

export default HourlyForcast;