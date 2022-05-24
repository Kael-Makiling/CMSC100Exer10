import React from 'react';
import "./addfriend.css";
import Miniprofile from '../miniprofile/Miniprofile';
import { FaUserFriends } from "react-icons/fa";
import { useUserAppContext } from '../../context/UserContext';
const Addfriends = () => {
  const { friends } = useUserAppContext();

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
    <button className='sidebar-viewmore'>
        VIEW MORE
    </button>
    </div>
  )
}

export default Addfriends