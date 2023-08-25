import { useState, useEffect } from 'react';

export function useScreenSize() {

    let isScreenSmall: boolean = window.innerWidth < 1280;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        if (windowWidth < 1280) {
            isScreenSmall = true;
        } else {
            isScreenSmall = false;
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [windowWidth]);

    return { isScreenSmall };
}
