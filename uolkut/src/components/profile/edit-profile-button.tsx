import React from 'react';
import './edit-profile-button.css';

interface EditProfileButtonProps {
    toggle: () => void;
}

const EditProfileButton: React.FC<EditProfileButtonProps> = (props) => {

    return (
        <div className='edit-profile-button__card-outer'>
            <div className='edit-profile-button__card-inner' onClick={props.toggle}>
                <span className='edit-profile-button'>
                    Editar meu perfil
                </span>
            </div>
        </div>
    );
}

export default EditProfileButton;
