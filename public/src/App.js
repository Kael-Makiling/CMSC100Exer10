import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import { SignIn, SignUp, Home, Searchpage } from './pages';
const App = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<div><SignIn/></div>} />
      <Route path="/sign-up" element={<div><SignUp/></div>} />
      <Route path="/home" element={<div><Home/></div>} />
      <Route path="/search" element={<div><Searchpage/></div>} />
    </Routes>
  )
}

export default App