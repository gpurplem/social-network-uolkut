import Navbar from './components/navbar';
import ProfileCard from './components/profile/profile-card';
import EditProfileButton from './components/profile/edit-profile-button';
import Friends from './components/profile/friends-card';
import Communities from './components/profile/communities-card';
import UserInfoCard from './components/profile/user-info-card';
import SearchBar from './components/search-bar';
import UserEditCard from './components/profile/user-edit-card';
import { useScreenSize } from './hooks/useScreenSize';
import { useIsEditing } from './hooks/useIsEditing';
import { useSearchParams } from 'react-router-dom';
import './Profile.css';
import { useEffect, useState } from 'react';

const Profile: React.FC = () => {

  const { isScreenSmall } = useScreenSize();
  const { isEditing, toggleIsEditing } = useIsEditing();
  const [urlParams] = useSearchParams();
  const [userData, setUserData] = useState({name: '', birthDate: '', occupation: '', country: '', city: '', relationship: ''});

  useEffect(() => {
    async function getUserData(userId: string | null) {

      if (!urlParams.get('u')) return;

      const response = await fetch('http://localhost:5000/users-data/?id=' + userId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      setUserData({name: data[0].name, birthDate: data[0].birthDate, occupation: data[0].occupation, country: data[0].country, city: data[0].city, relationship: data[0].relationship});
    }

    getUserData(urlParams.get('u'));

  }, []);

  return (
    <>
      <Navbar page='logged-in' name={userData.name} />
      <div className='profile-wrapper'>
        <div className='profile-content'>
          <div className='profile-left-section'>
            <SearchBar parent='' />
            <ProfileCard hideInfo={isEditing} name={userData.name} country={userData.country} relationship={userData.relationship} />
            <EditProfileButton toggle={toggleIsEditing} hideButton={isEditing} />
          </div>

          {
            !isEditing && isScreenSmall && 
            <div className='profile-right-section'>
              <Friends />
            </div>
          }

          <div className='profile-center-section'>
            {isEditing ? <UserEditCard toggle={toggleIsEditing} name={userData.name} country={userData.country} relationship={userData.relationship} birthDate={userData.birthDate} occupation={userData.occupation} city={userData.city} /> : <UserInfoCard name={userData.name} country={userData.country} relationship={userData.relationship} birthDate={userData.birthDate} occupation={userData.occupation} city={userData.city} />}
          </div>
          
          {!isEditing ? 
            <div className='profile-right-section'>
              {!isScreenSmall && <Friends />}
              <Communities />
            </div> : <div className='profile-right-section'></div>
          }
          
        </div>
      </div>
    </>
  )
};

export default Profile;
