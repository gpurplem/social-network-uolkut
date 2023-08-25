import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import ProfileCard from './components/profile/profile-card';
import EditProfileButton from './components/profile/edit-profile-button';
import Friends from './components/profile/friends-card';
import Communities from './components/profile/communities-card';
import UserInfo from './components/profile/user-info-card';
import SearchBar from './components/search-bar';
import { useScreenSize } from './useScreenSize';
import './Profile.css';

const Layout: React.FC = () => {

  const { isScreenSmall } = useScreenSize();

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
