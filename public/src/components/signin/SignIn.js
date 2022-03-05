import React from 'react'
import './signin.css';
import coffee from "../../assets/coffee.png";
import { useNavigate } from 'react-router-dom';
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
                <button type="button" className='button2'>LOG IN</button>
            </div>
            <div className='secondPart'>
                <h1 className='header2'> WELCOME BACK </h1>
                <p>Still not a member?</p>
                <p>Don’t worry, signing up is free.</p>
                <button type="button" className='button2'
                  onClick={() => {
                    navigate('/sign-up');
                  }}
                >SIGN IN</button>
            </div>
        </div>
    </div>
  )
}

export default SignIn