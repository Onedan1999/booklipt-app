import React from 'react';
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import InfoIcon from '@mui/icons-material/Info';
import './Hero.css';

function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero-div">
          <div className="hero-left">
            <h1 className="hero-heading">
              Trusted and secure bitcoin and crypto exchange
            </h1>
            <p className="para">
              Get started with the easiest and most secure platform to buy,
              sell, trade, and earn cryptocurriences.
            </p>
            <div className="btn-div">
              <Button
                className="btn2"
                href="/search"
              >
                Search Crypto
              </Button>
            </div>
          </div>
          <div className="hero-right">
          
            <img className="hero-img" src="https://danielsportfolio.me/wp-content/uploads/2022/05/Group-2-2.png"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
