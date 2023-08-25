import ProfilePicture from '../../assets/profile-images/profile-pic-user.jpg'
import ChangePictureButton from '../../assets/edit-picture-button.svg'
import './profile-card.css'

interface ProfileCardProps {
    hideInfo: boolean;
}

const Profile: React.FC<ProfileCardProps> = (props) => {

    return (
        <div className='profile-card-wrapper'>
            <div className='profile-card__image-wrapper'>
                <img className='profile-picture' src={ProfilePicture} alt="User" />
                {props.hideInfo &&  <img src={ChangePictureButton} alt="" className='profile-card__change-picture-button' />}
            </div>

            {!props.hideInfo && <span className='profile-name'>Iuri Silva</span>}
            {!props.hideInfo && <span className='profile-summary'>Solteiro, Brasil</span>}
        </div>
    );
}

export default Profile;
