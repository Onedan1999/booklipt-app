import React from 'react';
import { useParams } from 'react-router-dom';
import './ListDescription.css';
import rentals from '../rentals.js';

function ListDescription(){
  const { slug } = useParams();
  const room = rentals[slug];
  const { description } = room;

  return(
    <div className='description'>
        <div className='description-div'>
          <p className='desc-txt'>{description}</p>
        </div>
    </div>
  )
}

export default ListDescription;