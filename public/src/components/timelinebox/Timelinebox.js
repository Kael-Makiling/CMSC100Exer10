import React from 'react'
import "./timelinebox.css";
import Miniprofile from '../miniprofile/Miniprofile';
const Timelinebox = () => {
  return (
    <div className='timelinebox-container'>
        <div className='timelinebox-wrapper'>
            <div className='timelinebox-firstpart'>
                <div className='timelinebox-miniprofile'>
                    <Miniprofile />
                </div>
                <div className='timelinebox-time'>
                    <p className='timelinebox-time-text'> 1 hr ago </p>
                </div>
            </div>
            <div className='timelinebox-secondpart'>
                <p className='timelinebox-text'>VP Leni visited Surigao city a few days after Typhoon Odette.She brought assistance and helped us in the rehabilitation phase too. From a grateful city, welcome back! You won in Surigao in 2016. We're working hard for a repeat!💗</p>
            </div>
        </div>
    </div>
  )
}

export default Timelinebox