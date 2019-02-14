import React from 'react';
import Card from '../Card/Card';
import './Collection.css';

export default function Collection ({forcast,hourlyForcast}) {
    const collection = forcast.map( date =>{
        return (
            <Card date={date} key={date.id} hourlyForcast={hourlyForcast}/>
        )
    })
  return (
    <div className='collection'>
      {collection}
    </div>
  )
}
