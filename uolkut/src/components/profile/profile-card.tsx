import { useEffect } from 'react';
import ChangePictureButton from '../../assets/edit-picture-button.svg'
import './profile-card.css'

interface ProfileCardProps {
    hideInfo: boolean;
    name: string;
    country: string;
    relationship: string;
    picture: string;
}

const Profile: React.FC<ProfileCardProps> = (props) => {
    let imagePath;

    try {
        imagePath = require('../../assets/users-pictures/' + props.picture);
    } catch (error) {
        imagePath = require('../../assets/users-pictures/1.jpg');
    }

    function selectNewPicture() {
        console.log('ui');
    }

    return (
        <div className='profile-card-wrapper'>
            <div className='profile-card__image-wrapper'>
                <img className='profile-picture' src={imagePath} alt="User" />
                {props.hideInfo && <img src={ChangePictureButton} alt="" className='profile-card__change-picture-button' onClick={selectNewPicture} />}
            </div>

            {!props.hideInfo && <span className='profile-name'>{props.name}</span>}
            {!props.hideInfo && <span className='profile-summary'>{props.relationship}, {props.country}</span>}
        </div>
    );
}

export default Profile;
