import React from 'react';
import "./addfriend.css";
import Miniprofile from '../miniprofile/Miniprofile';
import { FaUserFriends } from "react-icons/fa";
  const Addfriends = ({friends}) => {

  return (
    <div className='sidebar-friends'>
    <div className='sidebar-friends-user'>
        <FaUserFriends className='sidebar-friends-icon'/>
        <p className='sidebar-friends-text'>Friends</p>
    </div>
      {friends.map((item, index)=> (
        <Miniprofile
          _id={item} 
          key={item + index}/>
      ))}
    </div>
  )
}

export default Addfriends