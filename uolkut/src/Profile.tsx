import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import ProfileCard from './components/profile/profile-card';
import EditProfileButton from './components/profile/edit-profile-button';
import Friends from './components/profile/friends-card';
import Communities from './components/profile/communities-card';
import UserInfo from './components/profile/user-info-card';
import SearchBar from './components/search-bar';
import './Profile.css';

const Layout: React.FC = () => {

  // Change components position when width is below 1280px: begin
  let isScreenSmall: boolean = window.innerWidth < 1280;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth < 1280) {
      isScreenSmall = true;
    } else {
      isScreenSmall = false;
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);
  // Change components position when width is below 1280px: end

  return (
    <>
      <Navbar page='logged-in' />
      <div className='profile-wrapper'>
        <div className='profile-content'>
          <div className='profile-left-section'>
            <SearchBar parent='' />
            <ProfileCard />
            <EditProfileButton />
          </div>


          {
            isScreenSmall && 
            <div className='profile-right-section'>
              <Friends />
            </div>
          }

          <div className='profile-center-section'>
            <UserInfo />
          </div>
          <div className='profile-right-section'>
            {!isScreenSmall && <Friends />}
            <Communities />
          </div>
        </div>
      </div>
    </>
  )
};

export default Layout;
