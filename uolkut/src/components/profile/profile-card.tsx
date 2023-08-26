import ProfilePicture from '../../assets/profile-images/profile-pic-user.jpg'
import ChangePictureButton from '../../assets/edit-picture-button.svg'
import './profile-card.css'

interface ProfileCardProps {
    hideInfo: boolean;
    name: string;
    country: string;
    relationship: string;
}

const Profile: React.FC<ProfileCardProps> = (props) => {

    return (
        <div className='profile-card-wrapper'>
            <div className='profile-card__image-wrapper'>
                <img className='profile-picture' src={ProfilePicture} alt="User" />
                {props.hideInfo &&  <img src={ChangePictureButton} alt="" className='profile-card__change-picture-button' />}
            </div>

            {!props.hideInfo && <span className='profile-name'>{props.name}</span>}
            {!props.hideInfo && <span className='profile-summary'>{props.relationship}, {props.country}</span>}
        </div>
    );
}

export default Profile;
