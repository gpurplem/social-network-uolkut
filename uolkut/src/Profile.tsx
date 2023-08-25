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
import './Profile.css';

const Layout: React.FC = () => {

  const { isScreenSmall } = useScreenSize();
  const { isEditing, toggleIsEditing } = useIsEditing();

  return (
    <>
      <Navbar page='logged-in' />
      <div className='profile-wrapper'>
        <div className='profile-content'>
          <div className='profile-left-section'>
            <SearchBar parent='' />
            <ProfileCard hideInfo={isEditing} />
            <EditProfileButton toggle={toggleIsEditing} hideButton={isEditing} />
          </div>

          {
            !isEditing && isScreenSmall && 
            <div className='profile-right-section'>
              <Friends />
            </div>
          }

          <div className='profile-center-section'>
            {isEditing ? <UserEditCard toggle={toggleIsEditing} /> : <UserInfoCard />}
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

export default Layout;
