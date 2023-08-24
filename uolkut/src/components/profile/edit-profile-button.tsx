import React from 'react';
import './edit-profile-button.css';

const EditProfileButton: React.FC = () => {

    return (
        <div className='edit-profile-button__card-outer'>
            <div className='edit-profile-button__card-inner'>
                <span className='edit-profile-button'>
                    Editar meu perfil
                </span>
            </div>
        </div>
    );
}

export default EditProfileButton;
