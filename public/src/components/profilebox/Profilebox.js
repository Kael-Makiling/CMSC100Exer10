import React from 'react';
import "./profilebox.css";
const Profilebox = () => {
  return (
    <div className='sidebar-profile'>
        <div className="sidebar-profile-square"></div>
        <div className="sidebar-profile-content">
                <div className='sidebar-profile-circle'>M</div>
                <div className="sidebar-profile-name">
                    <p className="sidebar-profile-text-name">Michael Jay</p>
                    <p className="sidebar-profile-text-name">Makiling</p>
                    <p className="sidebar-profile-text">@michaeljay</p>
                </div>
        </div>
    </div>
  )
}

export default Profilebox