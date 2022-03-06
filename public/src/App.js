import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
const App = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<div><SignIn/></div>} />
      <Route path="/sign-up" element={<div><SignUp/></div>} />
      <Route path="/home" element={<div><Home/></div>} />
    </Routes>
  )
}

export default App