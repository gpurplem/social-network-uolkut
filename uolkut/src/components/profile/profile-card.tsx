import ProfilePicture from '../profile/images/profile-pic-user.jpg'
import './profile-card.css'

const Profile: React.FC = () => {
    return (
        <div className='profile-card-wrapper'>
            <img className='profile-picture' src={ProfilePicture} alt="User" />
            <span className='profile-name'>Iuri Silva</span>
            <span className='profile-summary'>Solteiro, Brasil</span>
        </div>
    )
}

export default Profile;