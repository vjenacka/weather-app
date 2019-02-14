import React from 'react';
import './HourlyForcast.css';

export default function HourlyForcast({ active, hours }) {
    const hourlyDiv = hours.map((hour, index) => {
        return <li key={'hour' + index}>{index + 1}h :{hour}&deg;</li>
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
