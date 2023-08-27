import { useRef } from 'react';
import ChangePictureButton from '../../assets/edit-picture-button.svg'
import './profile-card.css'
import { useSearchParams } from 'react-router-dom';

interface ProfileCardProps {
    hideInfo: boolean;
    name: string;
    country: string;
    relationship: string;
    picture: string;
}

const Profile: React.FC<ProfileCardProps> = (props) => {
    let imagePath;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [urlParams] = useSearchParams();

    try {
        imagePath = require('../../assets/users-pictures/' + props.picture);
    } catch (error) {
        imagePath = require('../../assets/users-pictures/1.jpg');
    }

    function clickOnFileInput() {
        fileInputRef.current!.click();
    }

    const saveNewPicture = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!urlParams.get('u')) return;

        if (event.target.files && event.target.files.length > 0) {
            const selectedFile = event.target.files[0];

            const modifiedFile = new File([selectedFile], urlParams.get('u') + '.jpg', {
                type: selectedFile.type,
            });
            
        }
    };

    return (
        <div className='profile-card-wrapper'>
            <div className='profile-card__image-wrapper'>
                <img className='profile-picture' src={imagePath} alt="User" />
                {props.hideInfo && <img src={ChangePictureButton} alt="" className='profile-card__change-picture-button' onClick={clickOnFileInput} />}
                <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={saveNewPicture} />
            </div>

            {!props.hideInfo && <span className='profile-name'>{props.name}</span>}
            {!props.hideInfo && <span className='profile-summary'>{props.relationship}, {props.country}</span>}
        </div>
    );
}

export default Profile;
