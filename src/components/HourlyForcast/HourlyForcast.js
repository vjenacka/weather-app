import React from 'react';
import './HourlyForcast.css';

export default function HourlyForcast({ active, hours }) {
    const hourlyDiv = hours.map( hr => {
        return <li key={Math.floor(Math.random()*5000)}>{hr.hour} h: {hr.temp}&deg;</li>
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
