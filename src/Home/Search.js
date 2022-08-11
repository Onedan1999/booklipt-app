import React, { useState } from 'react';
import './Search.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Button from '@mui/material/Button';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of Guest <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <a onClick={() => navigate('/search')}>Search BookLipt</a>
    </div>
  );
}

export default Search;
