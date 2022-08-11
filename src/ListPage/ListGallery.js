import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ListGallery.css';
import rentals from '../rentals.js';

function ListGallery(){
  const { slug } = useParams();
  const room = rentals[slug];
  const { img1, img2, img3, img4, img5 } = room;

  return(
    <div className='gal-div'>
          <div className='gal-section'>
            <div className='gal-left'>
              <img className='img-left' src={img1}/>
            </div>
            <div className='gal-right'>
              <img className='img-right' src={img2}/>
              <img className='img-right' src={img3}/>
              <img className='img-right' src={img4}/>
              <img className='img-right' src={img5}/>
            </div>
        </div>
    </div>
  )
}

export default ListGallery;

