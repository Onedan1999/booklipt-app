import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ListLeft.css';
import ListDetails from './ListDetails.js';
import ListDescription from './ListDescription.js';
import Amenities from './Amenities.js';
import rentals from '../rentals.js';

function ListLeft() {
  const { slug } = useParams();
  const room = rentals[slug];
  const { sub_title } = room;

  return (
    <div className="list-left">
          <div className="left-details1">
            <h1 className="left-h1">{sub_title}</h1>
            <p className="left-p">{sub_title}</p>
          </div>
      <ListDetails />
      <ListDescription />
      <Amenities />
    </div>
  );
}

export default ListLeft;
