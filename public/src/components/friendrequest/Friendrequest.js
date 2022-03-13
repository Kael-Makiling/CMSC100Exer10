import React from 'react'
import "./friendrequest.css";
import Miniprofile from '../miniprofile/Miniprofile';
import { FaUserPlus } from "react-icons/fa";
const Friendrequest = () => {
  return (
    <div className='sidebar-friendrequest'>
      <div className='sidebar-friends-user'>
          <FaUserPlus className='sidebar-friends-icon'/>
          <p className='sidebar-friends-text'>Friend Request</p>
      </div>
      <Miniprofile />
      <button className='sidebar-viewmore'>
          VIEW MORE
      </button>
    </div>
  )
}

export default Friendrequest