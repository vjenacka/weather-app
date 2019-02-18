import React from 'react';
import './HourlyForcast.css';

export default function HourlyForcast({ active, hours, temps, icons }) {
    const hourlyDiv = hours.map( (hr,index) => {
        return <div key={Math.floor(Math.random()*5000)}>
            <p>{hr} h: {temps[index]}&deg;</p>
            <img src={'http://openweathermap.org/img/w/'+icons[index]+'.png'} alt="weather-img" />
            </div>
    });
    const renderActive = active ? (
        <div className='hourly-forcast'>
            <ul>
                {hourlyDiv}
            </ul>
        </div>
    ) : null;
    return (
        <div>
            {renderActive}
        </div>
    )
}
