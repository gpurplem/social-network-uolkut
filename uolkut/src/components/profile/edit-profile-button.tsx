import React from 'react';
import './edit-profile-button.css';

interface EditProfileButtonProps {
    toggle: () => void;
}

const EditProfileButton: React.FC<EditProfileButtonProps> = (props) => {
    function toggleEditing(event: React.FormEvent) {
        event.preventDefault();
        props.toggle();
    }

    return (
        <button type="submit" className="edit-profile-button" onClick={toggleEditing}>Editar meu perfil</button>
    );
}

export default EditProfileButton;
