import React, { useEffect } from 'react'
import "./timelinebox.css";
import Miniprofile from '../miniprofile/Miniprofile';
import Moment from 'moment';
const Timelinebox = ({_id, date, content }) => {
  const formatted_date = Moment(date).format("MMM Do YY");
  return (
    <div className='timelinebox-container'>
        {console.log(_id, date, content)}
        <div className='timelinebox-wrapper'>
            <div className='timelinebox-firstpart'>
                <div className='timelinebox-miniprofile'>
                    {/* <Miniprofile _id={_id}/> */}
                    {_id}
                </div>
                <div className='timelinebox-time'>
                    <p className='timelinebox-time-text'> {formatted_date} </p>
                </div>
            </div>
            <div className='timelinebox-secondpart'>
                <p className='timelinebox-text'>{content}</p>
            </div>
        </div>
    </div>
  )
}

export default Timelinebox