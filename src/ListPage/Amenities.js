import React from 'react';
import './Amenities.css';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import hairDryer from '@iconify-icons/mdi/hair-dryer';
import { Icon } from '@iconify/react';
import microwaveIcon from '@iconify-icons/mdi/microwave';
import deskIcon from '@iconify-icons/mdi/desk';
import Button from '@mui/material/Button';

function Amenities() {
  return (
    <div className="amenities-div">
      <h1 className="amen-title">What this place offers</h1>
      <div className="amenities">
        <div className="amenity">
          <div className="amen-left">
            <RssFeedOutlinedIcon className="details-icn" />
          </div>
          <div className="amen-right">
            <p className="amen-p">Wifi</p>
          </div>
        </div>
        <div className="amenity">
          <div className="amen-left">
            <TvOutlinedIcon className="details-icn" />
          </div>
          <div className="amen-right">
            <p className="amen-p">TV</p>
          </div>
        </div>
        <div className="amenity">
          <div className="amen-left">
            <DriveEtaOutlinedIcon className="details-icn" />
          </div>
          <div className="amen-right">
            <p className="amen-p">Free street parking</p>
          </div>
        </div>
        <div className="amenity">
          <div className="men-left">
            <AcUnitOutlinedIcon className="details-icn" />
          </div>
          <div className="amen-right">
            <p className="amen-p">Air conditioning</p>
          </div>
        </div>
        <div className="amenity">
          <div className="amen-left">
            <DeckOutlinedIcon className="details-icn" />
          </div>
          <div className="amen-right">
            <p className="amen-p">Patio or balcony</p>
          </div>
        </div>
        <div className="amenity">
          <div className="amen-left">
            <LocalFloristOutlinedIcon className="details-icn" />
          </div>
          <div className="amen-right">
            <p className="amen-p">Backyard</p>
          </div>
        </div>
        <div className="amenity">
          <div className="amen-left">
            <LocalMallOutlinedIcon className="details-icn" />
          </div>
          <div className="amen-right">
            <p className="amen-p">Luggage dropoff</p>
          </div>
        </div>
        <div className="amenity">
          <div className="amen-left">
            <Icon icon={hairDryer} className="details-icn" />
          </div>
          <div className="amen-right">
            <p className="amen-p">Hair dryer</p>
          </div>
        </div>
        <div className="amenity">
          <div className="amen-left">
            <Icon icon={microwaveIcon} className="details-icn" />
          </div>
          <div className="amen-right">
            <p className="amen-p">Microwave</p>
          </div>
        </div>
        <div className="amenity">
          <div className="amen-left">
            <Icon icon={deskIcon} className="details-icn" />
          </div>
          <div className="amen-right">
            <p className="amen-p">Dedicated workspace</p>
          </div>
        </div>
      </div>
      <Button id="amen-btn">Show all amenities</Button>
    </div>
  );
}

export default Amenities;
