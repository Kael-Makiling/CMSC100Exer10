import React from 'react';
import "./addfriend.css";
import Miniprofile from '../miniprofile/Miniprofile';
import { FaUserFriends } from "react-icons/fa";
import { useUserAppContext } from '../../context/UserContext';
import { useNavigate } from "react-router-dom";
const Addfriends = () => {
  let navigate = useNavigate();
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
    <button className='sidebar-viewmore'
      onClick={() => {
        navigate("/friendsPage");
      }}
    >
        VIEW MORE
    </button>
    </div>
  )
}

export default Addfriends