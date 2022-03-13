import React from 'react';
import "./searchpage.css";

import { Navbar, Sidebar, Friendsuggestion, Creatorbox } from '../../containers';
import { Friendbox } from '../../components';
const Searchpage = () => {
  return (
    <div className='search-container'>
      <Navbar />
      <div className='search-wrapper'>
        <div className='search-left'>
          <Sidebar/>
        </div>
        <div className='search-middle'>
          <p className='search-middle-text'>Search</p>
          <div className='search-middle-friendbox'>
            <Friendbox />
            <Friendbox />
            <Friendbox />
            <Friendbox />
          </div>
        </div>
        <div className='search-right'>
          <div className='search-right-contents'>
            <Creatorbox />
            <Friendsuggestion />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searchpage