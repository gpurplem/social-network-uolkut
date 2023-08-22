import React from 'react';

import Navbar from './components/navbar';
import AccessFormCard from './components/accessFormCard';

import './App.css';


function App() {
  return (
    // <Navbar page='logged-in' />
    <AccessFormCard form='signup' />
  );
}

export default App;
