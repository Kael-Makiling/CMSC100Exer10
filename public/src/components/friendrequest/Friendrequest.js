import React from 'react'
import "./friendrequest.css";
import Miniprofilefr from '../miniprofilefr/Miniprofilefr';
import { FaUserPlus } from "react-icons/fa";
import { useUserAppContext } from '../../context/UserContext';
const Friendrequest = () => {
  const { firstName, lastName, email } = useUserAppContext();
  
  return (
    <div className='sidebar-friendrequest'>
      <div className='sidebar-friends-user'>
          <FaUserPlus className='sidebar-friends-icon'/>
          <p className='sidebar-friends-text'>Friend Request</p>
      </div>
      <div className='sidebar-friendrequests'>
        <Miniprofilefr />
        <Miniprofilefr />
        <Miniprofilefr />
      </div>
      <button className='sidebar-viewmore'>
          VIEW MORE
      </button>
    </div>
  )
}

export default Friendrequest