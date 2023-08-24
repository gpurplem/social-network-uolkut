import Navbar from './components/navbar';
import ProfileCard from './components/profile/profile-card';
import EditProfileButton from './components/profile/edit-profile-button';
import Friends from './components/profile/friends-card';
import Communities from './components/profile/communities-card';
import UserInfo from './components/profile/user-info-card';
import './Profile.css';

const Layout: React.FC = () => {

  return (
    <>
      <Navbar page='logged-in' />
      <UserInfo />
      <ProfileCard />
      <EditProfileButton />
      <Friends />
      <Communities />
    </>
  )
};

export default Layout;
