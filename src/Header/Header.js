import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

function Header() {
  return (
    <div className="header">
      <Link style={{ textDecoration: 'none' }} href="/">
        <h1 className="header__icon">Bookier</h1>
      </Link>
      <div className="header__center">
        <input className="search__input" type="text" placeholder="Search..." />
        <SearchIcon />
      </div>
      <div className="header__right">
        <div className="language-div">
          <LanguageIcon className="lan-icn" />
          <ExpandMoreIcon className="lan-icn" />
        </div>
        <Button id="startRsvp" className="header-btn" variant="outlined">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Header;
