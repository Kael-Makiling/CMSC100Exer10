import React from 'react'
import "./sidebar.css";
import Profilebox from '../profilebox/Profilebox';
import Stats from '../stats/Stats';
import Friend from '../addfriend/Friends';
import Friendrequest from '../friendrequest/Friendrequest';
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className='sidebar-wrapper'>
            <Profilebox />
            <Stats />
            <Friend />
            <Friendrequest />
        </div>
    </div>
  )
}

export default Sidebar