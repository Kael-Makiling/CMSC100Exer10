import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import { SignIn, SignUp, Home, Searchpage, Profilepage, Friendspage, Friendsprofilepage } from './pages';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div><SignIn/></div>} />
      <Route path="/sign-up" element={<div><SignUp/></div>} />
      <Route path="/home" element={<div><Home/></div>} />
      <Route path="/profilepage" element={<div><Profilepage/></div>} />
      <Route path="/search" element={<div><Searchpage/></div>} />
      <Route path="/friendsPage" element={<div><Friendspage/></div>} />
      <Route path="/friendsprofilepage" element={<div><Friendsprofilepage/></div>} />
    </Routes>
  )
}

export default App