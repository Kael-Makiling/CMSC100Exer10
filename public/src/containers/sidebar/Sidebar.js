import React from 'react'
import "./sidebar.css";

import { Profilebox, Stats, Addfriend, Friendrequest } from '../../components'
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className='sidebar-wrapper'>
            <Profilebox />
            <Stats />
            <Addfriend />
            <Friendrequest />
        </div>
    </div>
  )
}

export default Sidebar