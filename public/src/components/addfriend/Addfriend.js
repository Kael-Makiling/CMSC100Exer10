import React from 'react';
import "./addfriend.css";
import Miniprofile from '../miniprofile/Miniprofile';
import { FaUserFriends } from "react-icons/fa";
const Addfriends = () => {
  return (
    <div className='sidebar-friends'>
    <div className='sidebar-friends-user'>
        <FaUserFriends className='sidebar-friends-icon'/>
        <p className='sidebar-friends-text'>Friends</p>
    </div>
    <Miniprofile />
    <button className='sidebar-viewmore'>
        VIEW MORE
    </button>
    </div>
  )
}

export default Addfriends