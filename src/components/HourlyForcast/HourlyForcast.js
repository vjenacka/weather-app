import React from 'react';
import './HourlyForcast.css';

export default function HourlyForcast({ active, hours }) {
    const hourlyDiv = hours.map((hour) => {
        return <li key={hour.date}>{hour.date} :{hour.temp}&deg;</li>
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
