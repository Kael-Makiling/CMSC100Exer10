import React from 'react';
import "./profilebox.css";
import { useUserAppContext } from '../../context/UserContext';
const Profilebox = () => {
  const { firstName, lastName, email } = useUserAppContext();

  return (
    <div className='sidebar-profile'>
        <div className="sidebar-profile-square"></div>
        <div className="sidebar-profile-content">
                <div className='sidebar-profile-circle'>{firstName.split('')[0]}</div>
                <div className="sidebar-profile-name">
                    <p className="sidebar-profile-text-name">{firstName}</p>
                    <p className="sidebar-profile-text-name">{lastName}</p>
                    <p className="sidebar-profile-text">{email}</p>
                </div>
        </div>
    </div>
  )
}

export default Profilebox