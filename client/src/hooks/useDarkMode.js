import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = () => {

    const [DarkModeEnabled, setDarkModeEnabled] = useLocalStorage('dark mode', false);

    useEffect(() => {
        if(DarkModeEnabled === false) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        };
    }, [DarkModeEnabled]);

    return [DarkModeEnabled, setDarkModeEnabled];
}