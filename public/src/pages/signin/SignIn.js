import React from 'react'
import './signin.css';
import coffee from "../../assets/coffee.png";
import { useNavigate } from 'react-router-dom';
import Buttons from '../../components/buttons/buttons';
const SignIn = () => {
  let navigate = useNavigate();

  return (
    <div className='container'>
        <div className='placeHolder'>
            <div className='firstPart'>
                <img src={coffee} alt="coffee.png" className='coffee'/>
                <h1 className='header1'> SIGN IN </h1>
                <input className="box" type="text" id="email" placeholder="Email"></input>
                <input className="box" type="text" id="password" placeholder="Password"></input>
                <Buttons>LOG IN</Buttons>
            </div>
            <div className='secondPart'>
                <h1 className='header2'> WELCOME BACK </h1>
                <p>Still not a member?</p>
                <p>Don’t worry, signing up is free.</p>
                <Buttons
                  onClick={() => {
                    navigate('/sign-up');
                  }}
                >SIGN IN</Buttons>
            </div>
        </div>
    </div>
  )
}

export default SignIn