import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import './ListRight.css';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import rentals from '../rentals.js';

function ListRight() {
  const { slug } = useParams();
  const room = rentals[slug];
  const { price, rating, location, num_reviews } = room;

  return (
    <div className="list-right">
      <div className="side-bar">
            <div  className="side">
              <div className="side-header">
                <h1 className="lef-h1">${price}/night</h1>
                <div className="side-review">
                  <StarIcon className="searchResult-star" />
                  <p className="header-rating">{rating}</p>
                </div>
              </div>
              <div className="side-details">
                <div className="side-dates">
                  <div className="dates-left">
                    <p className="check-in">Check In</p>
                    <p className="in-date">6/24/2021</p>
                  </div>
                  <div className="dates-right">
                    <p className="check-out">Check Out</p>
                    <p className="out-date">6/24/2021</p>
                  </div>
                </div>
                <div className='guest-details'>
                  <div className='guest-left'>
                    <p className='guest'>Guests</p>
                    <p className='guest-num'>2 guests</p>
                  </div>
                  <div className='guest-right'>
                    <ExpandMoreIcon/>
                  </div>
                </div>
              </div>
              <div className='reserve-button'>
                  <Button id='res-btn'>Reserve</Button>
              </div>
            </div>
      </div>
    </div>
  );
}

export default ListRight;
