import React from 'react';

import Navbar from './components/navbar';
import AccessFormCard from './components/accessFormCard';

import './App.css';


function App() {
  return (
    <>
      {/* <Navbar page='logged-in' /> */}
      <AccessFormCard form='login' />
      <AccessFormCard form='signup' />
      <AccessFormCard form='forgot-password' />
    </>
  );
}

export default App;
