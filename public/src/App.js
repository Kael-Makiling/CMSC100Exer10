import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
const App = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<div><SignIn/></div>} />
      <Route path="/sign-up" element={<div><SignUp/></div>} />
    </Routes>
  )
}

export default App