import { useState } from 'react';
import Navbar from './components/navbar';
import AccessFormCard from './components/accessFormCard';
import Footer from './components/footer';

import './App.css';
import Image from './assets/access-page-image.png';


function Home() {
  const [page, setPage] = useState('login');

  return (
    <>
      <Navbar page='logged-out' name='' />

      <div className='access-page__main-card'>
        <div className='access-page__image-wrapper'>
          <img src={Image} alt="Três pessoas conversando e sorrindo" className='access-page__image' />
          <p className='access-page__image-text'>Conecte-se aos seus amigos e familiares<br />usando recados e mensagens instantâneas</p>
        </div>

        {page === 'login' && <AccessFormCard form='login' setPage={setPage} />}
        {page === 'signup' && <AccessFormCard form='signup' setPage={setPage} />}
        {page === 'forgot-password' && <AccessFormCard form='forgot-password' setPage={setPage} />}
      </div>

      <Footer />
    </>
  );
}

export default Home;

