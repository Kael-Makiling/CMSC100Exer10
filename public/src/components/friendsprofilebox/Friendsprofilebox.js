import React from 'react';
import "./friendsprofilebox.css";
const Friendsprofilebox = ({firstCharacter, firstName, lastName, email}) => {
  return (
    <div className='sidebar-profile'>
      {console.log(email)}
        <div className="sidebar-profile-square"></div>
        <div className="sidebar-profile-content">
                <div className='sidebar-profile-circle'>{firstCharacter}</div>
                <div className="sidebar-profile-name">
                    <p className="sidebar-profile-text-name">{firstName}</p>
                    <p className="sidebar-profile-text-name">{lastName}</p>
                    <p className="sidebar-profile-text">{email}</p>
                </div>
        </div>
    </div>
  )
}

export default Friendsprofilebox