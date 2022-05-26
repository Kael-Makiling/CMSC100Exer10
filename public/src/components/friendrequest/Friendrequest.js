import React from 'react'
import "./friendrequest.css";
import Miniprofilefr from '../miniprofilefr/Miniprofilefr';
import { FaUserPlus } from "react-icons/fa";
import { useUserAppContext } from '../../context/UserContext';
const Friendrequest = () => {
  const { _id, friendRequest } = useUserAppContext();
  
  return (
    <div className='sidebar-friendrequest'>
      <div className='sidebar-friends-user'>
          <FaUserPlus className='sidebar-friends-icon'/>
          <p className='sidebar-friends-text'>Friend Request</p>
      </div>
      <div className='sidebar-friendrequests'>
      {friendRequest.map((item, index)=> (
        <Miniprofilefr
          _id={_id}
          friend_id={item} 
          key={item + index}/>
      ))}
      </div>
    </div>
  )
}

export default Friendrequest