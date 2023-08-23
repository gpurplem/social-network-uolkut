import React from 'react';
import Navbar from './components/navbar';
import AccessFormCard from './components/accessFormCard';
import Footer from './components/footer';

import './App.css';
import Image from './assets/access-page-image.png';


function App() {
  return (
    <>
      <Navbar page='logged-out' />

      <div className='access-page__main-card'>
        <div className='access-page__image-wrapper'>
          <img src={Image} alt="Três pessoas conversando e sorrindo" className='access-page__image' />
          <p className='access-page__image-text'>Conecte-se aos seus amigos e familiares<br />usando recados e mensagens instantâneas</p>
        </div>

        <AccessFormCard form='login' />
      </div>

      <Footer />
    </>
  );
}

export default App;
