import React from 'react';
import Card from '../Card/Card';
import './Collection.css';

export default function Collection ({forcast}) {
    const collection = forcast.map( date =>{
        return (
            <Card date={date} key={Math.floor(Math.random()*100)}/>
        )
    })
  return (
    <div className='collection'>
      {collection}
    </div>
  )
}
