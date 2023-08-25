import { useState } from 'react';

export function useIsEditing() {

    const [isEditing, setIsEditing] = useState(false);

    function toggleIsEditing() {
        setIsEditing(p => !p);
    }

    return { isEditing, toggleIsEditing };
}
