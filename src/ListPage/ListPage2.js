import React from 'react';
import './ListPage.css';
import { Link, useParams } from 'react-router-dom';
import ListGallery from './ListGallery.js';
import StarIcon from '@mui/icons-material/Star';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ListRight from './ListRight.js';
import ListLeft from './ListLeft.js';
import rentals from '../rentals.js';
import Reviews from './Reviews.js';

function ListPage2() {
  const { slug } = useParams();
  const room = rentals[slug];
  const { title, rating, location, num_reviews } = room;

  return (
    <div className="list">
      <div className="list-div">
        <div className="list-header">
          <h1 className="list-h1">{title}</h1>
          <div className="header-sub">
            <div className="header-1">
              <StarIcon className="searchResult-star" />
              <p className="header-rating">{rating}</p>
              <p className="header-num_reviews">
                ({num_reviews} reviews)
              </p>
              <p className="header-num_reviews">{location} </p>
            </div>
            <div className="header-2">
              <div className="h2-div">
                <ShareOutlinedIcon className="list-icon" />
                <p className="">Share</p>
              </div>
              <div className="h2-div">
                <FavoriteBorderOutlinedIcon className="list-icon" />
                <p className="">Save</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPage2;
