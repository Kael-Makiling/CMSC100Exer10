import React from 'react'
import "./sidebar.css";
import { useUserAppContext } from '../../context/UserContext';

import { Profilebox, Stats, Addfriend, Friendrequest } from '../../components'

const Sidebar = () => {
  const {friendRequest, friends} = useUserAppContext();
  return (
    <div className='sidebar-container'>
        <div className='sidebar-wrapper'>
            <Profilebox />
            <Stats />
            <div className='sidebar-wrapper-contents'>
            {(friends.length !== 0 ?
              <div><Addfriend /></div> : <div></div>
            )}
            {(friendRequest.length !== 0 ?
              <div><Friendrequest /></div> : <div></div>
            )}
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar