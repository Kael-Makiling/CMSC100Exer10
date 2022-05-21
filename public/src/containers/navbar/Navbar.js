import React from 'react';
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { useUserAppContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  let navigate = useNavigate();
  const { name, logOut} = useUserAppContext();

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
            <div className='navbar-item-container'>
                <p className="logo">Coffer</p>
            </div>
        </div>
        <div className="navbar-center"> 
            <button className="navbar-icon">
                <FaSearch />
            </button>
            <input className="navbar-search" type="text" id="search" ></input>
        </div>
        <div className="navbar-right">
            <button type="button" className="navbar-button" onClick={logOut}>
                Log Out
            </button>
            <p 
              onClick={() => {
                navigate('/profilepage');
              }}
            >{name}</p>
            <span className="dot"></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar