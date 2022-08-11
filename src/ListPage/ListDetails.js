import React from 'react';
import './ListDetails.css';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

function ListDetails() {
  return (
    <div className="details-div">
      <div className="details">
        <div className='details-left'>
          <MeetingRoomOutlinedIcon className='details-icn'/>
        </div>
        <div className='details-right'>
          <h1 className='det-h1'>Self check-in</h1>
          <p className='det-p'>Check yourself in with the lockbox.</p>
        </div>
      </div>
      <div className="details">
        <div className='details-left'>
          <LocalLaundryServiceOutlinedIcon className='details-icn'/>
        </div>
        <div className='details-right'>
          <h1 className='det-h1'>Clean and tidy</h1>
          <p className='det-p'>3 recent guests said this place was sparkling clean.</p>
        </div>
      </div>
      <div className="details">
        <div className='details-left'>
          <EmojiEventsOutlinedIcon className='details-icn'/>
        </div>
        <div className='details-right'>
          <h1 className='det-h1'>This person is a Superhost</h1>
          <p className='det-p'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
        </div>
      </div>
    </div>
  );
}

export default ListDetails;