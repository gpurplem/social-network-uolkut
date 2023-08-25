import React from 'react';
import './edit-profile-button.css';

interface EditProfileButtonProps {
    hideButton: boolean;
    toggle: () => void;
}

const EditProfileButton: React.FC<EditProfileButtonProps> = (props) => {
    function toggleEditing(event: React.FormEvent) {
        event.preventDefault();
        props.toggle();
    }

    let buttonClass = props.hideButton ? 'edit-profile-button edit-profile-button--hidden' : 'edit-profile-button';


    return (
        <button type="submit" className={buttonClass} onClick={toggleEditing}>
            Editar meu perfil
        </button>
    );
}

export default EditProfileButton;
