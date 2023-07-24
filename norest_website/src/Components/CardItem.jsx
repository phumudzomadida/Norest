import React from 'react';
import './CardItem.css';

export default function CardItem({image, serviceName}) {
  return (
    <div className='Card-item-container'>
        <img src={image} alt="images" className='service-image' />
        <div className='service-name'>
            <h4>{serviceName}</h4>
        </div>
    </div>
  )
}
