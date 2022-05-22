import React, { useEffect } from 'react';
import "./home.css";
import { Ownpostbox, Postbox, Timelinebox } from '../../components';
import {Creatorbox, Friendsuggestion, Navbar, Sidebar} from '../../containers';
import { usePostAppContext } from '../../context/PostContext';
const Home = () => {
  // const {Home} = usePostAppContext();

  // const gettingPost = (async () => {

  //     const response = await fetch("/api/get", {method: 'GET', headers: { 'Content-Type' : 'application/json'}});
  //     const post = await response.json();

  //     console.log(post)
  // }, [])

  // useEffect (()=>{
  //   gettingPost()
  // })

  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-wrapper'>
        <div className='home-left'>
          <Sidebar/>
        </div>
        <div className='home-middle'>
          <p className='home-middle-text'>HOME FEED</p>
          <Postbox />
          <Timelinebox />
          <Timelinebox />
          <Ownpostbox />
        </div>
        <div className='home-right'>
          <div className='home-right-contents'>
            <Creatorbox />
            <Friendsuggestion />
            <div className='home-right-ad'>
              <div class="home-right-suggested">
                <div class="suggested-container"> 
                  <p class="suggested-header-text">Music</p>
                  <p class="suggested-text-small">	• Suggested for you</p>
                </div>
                <div class="suggested-photo"></div>
                <p class="suggested-header-text">Blackpink</p>
                <p class="suggested-text-small">As if it's your Last</p>
                <button>Listen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home