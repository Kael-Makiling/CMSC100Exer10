import React from 'react';
import "./profilepage.css";
import { Postbox, Timelinebox } from '../../components';
import {Creatorbox, Friendsuggestion, Navbar, Sidebar} from '../../containers';
import { useUserAppContext } from '../../context/UserContext';

const Profilepage = () => {
  const { name } = useUserAppContext();
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-wrapper'>
        <div className='home-left'>
          <Sidebar/>
        </div>
        <div className='home-middle'>
          <p className='home-middle-text'>{name}</p>
          <Postbox />
          <Timelinebox />
        </div>
        <div className='home-right'>
          <div className='home-right-contents'>
            <Creatorbox />
            <Friendsuggestion />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profilepage