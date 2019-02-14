import React from 'react'

export default function HourlyForcast({active,hours}) {
    const hrForcastDiv=hours.map(hour =>{
        return (
            <p>{hour}</p>
        )
    })
    const renderActive= active? (
        <div>
            {hrForcastDiv}
        </div>
    ) : null;
    return (
        <div>
            {renderActive}
        </div>
    )
}
