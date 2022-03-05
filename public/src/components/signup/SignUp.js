import React from 'react';
import './signup.css';
import coffee from "../../assets/coffee.png";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  let navigate = useNavigate();

  return (
    <div className='container'>
      <div className='placeHolder'>
          <div className='firstPart-signup'>
            <h1 className='header2'> HELLO THERE </h1>
            <p>Enter your personal details,</p>
            <p>and find friends.</p>
            <button type="button" className='button2'
              onClick={() => {
                navigate('/sign-in');
              }}
            >SIGN UP</button>
          </div>
          <div className='secondPart-signup'>
            <img src={coffee} alt="coffee.png" className='coffee'/>
            <h1 className='header1'> CREATE ACCOUNT </h1>
            <input className="box" type="text" id="firstname" placeholder="First Name"></input>
            <input className="box" type="text" id="lastname" placeholder="Last Name"></input>
            <input className="box" type="text" id="email" placeholder="Email"></input>
            <hr class="new1"></hr>
            <input className="box" type="text" id="password" placeholder="Password"></input>
            <input className="box" type="text" id="repeatpassword" placeholder="Repeat Password"></input>
            <button type="button" className='button2'>LOG IN</button>
          </div>
      </div>
    </div>
  )
}

export default SignUp