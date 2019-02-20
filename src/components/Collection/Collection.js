import React from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import './Collection.css';

export default function Collection({ forcast, hourlyForcast }) {
  const collection = forcast.map(date => {
    return (
      <Link to={'/' + date.id} key={date.id}>
        <Card date={date} hourlyForcast={hourlyForcast} />
      </Link>
    )
  })
  return (
    <div className='collection'>
      {collection}
    </div>
  )
}
