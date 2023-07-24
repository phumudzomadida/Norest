import React from 'react';
import './Services.css';
import CardItem from './CardItem';

//importing images
import Tiling from '../Images/Tiling.jpg';
import WaterProofing from '../Images/waterProofing.jpg';
import Painting from '../Images/Painting.jpg';
import Paving from '../Images/Paving.jpg';
import Ceiling from '../Images/ceiling.jpg';
import Plastering from '../Images/plustering.jpg';
import skimming from '../Images/Building.jpg';
import rhino from '../Images/rhinolitting.jpg';
import building from '../Images/Building.jpg';
import wallpaper from '../Images/wallpaper.jpg';

function Services() {
    //services
    const data = [
        {
            key: 1,
            image: Tiling,
            service: 'TILING'
        },
        {
            key: 2,
            image: WaterProofing,
            service: 'WATER PROOFING'
        },
        {
            key: 3,
            image: Painting,
            service: 'PAINTING'
        },
        {
            key: 4,
            image: Paving,
            service: 'PAVING'
        },
        {
            key: 5,
            image: Ceiling,
            service: 'CEILING'
        },
        {
            key: 6,
            image: Plastering,
            service: 'PLASTERING'
        },
        {
            key: 7,
            image: skimming,
            service: 'SKIMMMING'
        },
        {
            key: 8,
            image: rhino,
            service: 'RHINOLITTING'
        },
        {
            key: 9,
            image: building,
            service: '  BUILDING'
        },
        {
            key: 10,
            image: wallpaper,
            service: 'WALLPAPER'
        },
    ]
    //handling carditems
    const listItems = data.map((service) => 
    <CardItem
    key={service.key}
    image={service.image}
    serviceName={service.service}
    />
  )

  return (
    <div className='service-container' id='service'>
        <div className='about-header'>
            <h1>What I do?</h1>
        </div>
        <div className='items'>
            {listItems}
        </div>
    </div>
  )
}

export default Services;