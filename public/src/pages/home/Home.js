import React from 'react';
import "./home.css";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <Sidebar/>
    </div>
  )
}

export default Home