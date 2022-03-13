import React from 'react';
import "./friendbox.css";
import Profilebox from '../profilebox/Profilebox';
const Friendbox = () => {
  return (
    <div className='friendbox-container'>
        <div className='friendbox-wrapper'>
            <div className='friendbox-firstpart'>
                <Profilebox />
            </div>
            <div className='friendbox-secondpart'>
                <button className='friendbox-button'>Add Friend</button>
                <button className='friendbox-button'>View More</button>
            </div>
        </div>
    </div>
  )
}

export default Friendbox