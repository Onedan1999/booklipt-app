import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SearchPage.css';
import Button from '@mui/material/Button';
import SearchResult from './SearchResult.js';
import rentals from '../rentals.js';

function SearchPage() {

  return (
    <div className="searchPage">
      <div className="searchPage-div">
        <div className="searchPage__info">
          <p>62 stays · 26 august to 30 august · 2 guest</p>
          <h1>Stays nearby</h1>
          <Button variant="outlined">Cancellation Flexibility</Button>
          <Button variant="outlined">Type of place</Button>
          <Button variant="outlined">Price</Button>
          <Button variant="outlined">Rooms and beds</Button>
          <Button variant="outlined">More filters</Button>
        </div>
        {Object.entries(rentals).map(([slug, { title, rating, location, price, img1, sub_title, total }]) => (
          <Link className="a-href" to={`/room/${slug}`}>
            <SearchResult
              img={img1}
              location={location}
              title={title}
              description={sub_title}
              star={rating}
              price={price}
              total={total}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
