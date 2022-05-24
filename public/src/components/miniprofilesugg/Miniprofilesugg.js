import React from 'react'
import "./miniprofilesugg.css"
import {FaPlusCircle} from "react-icons/fa"; 
import { useUserAppContext } from '../../context/UserContext';
const Miniprofilesugg = ({friend_id, fullname, email}) => {
  const {_id} =useUserAppContext();

  const handleAddFriend = async()=> {
    const response = await fetch("/api/user/addFriend/"+friend_id+"/"+_id, { 
      method: 'POST', 
      headers: { 'Content-Type' : 'application/json'}})
    const user = await response.json();
    console.log(user);
  }

  return (
    <div className='sidebar-friendsugg-box'>
        <div className='sidebar-friends-circle'>{fullname.split('')[0]}</div>
        <div className='sidebar-friends-name'>
            <p className='sidebar-friends-fullname'>{fullname}</p>
            <p className='sidebar-friends-username'>{email}</p>
        </div>
        <FaPlusCircle onClick={handleAddFriend} className='miniprofilesugg-icon'/>
    </div>
  )
}

export default Miniprofilesugg