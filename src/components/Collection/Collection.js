import React from 'react';
import Card from '../Card/Card';

export default function Collection ({props}) {
    console.log(props)
    const collection = forcast.forEach( day =>{
        return(
            <Card day={day}/>
        )
        
    })
  return (
    <div>
      {collection}
    </div>
  )
}
