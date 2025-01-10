import { useState, useEffect } from 'react';

const useDarkMode = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const initializeDarkMode = async () => {
            if (typeof window !== 'undefined') {
                const savedDarkMode = window.localStorage.getItem('darkMode');
                if (savedDarkMode === 'true') {
                    setDarkMode(true);
                    const darkreader = await import('darkreader');
                    darkreader.enable({
                        brightness: 100,
                        contrast: 90,
                        sepia: 10,
                    });
                }
            }
        };

        initializeDarkMode();
    }, []);

    useEffect(() => {
        const darkModeActivator = async () => {
            if (typeof window !== 'undefined') {
                const darkreader = await import('darkreader');
                const isInDarkMode = darkreader.isEnabled();
                if (darkMode && !isInDarkMode) {
                    darkreader.enable({
                        brightness: 100,
                        contrast: 90,
                        sepia: 10,
                    });
                    window.localStorage.setItem('darkMode', 'true');
                } else if (!darkMode && isInDarkMode) {
                    darkreader.disable();
                    window.localStorage.removeItem('darkMode');
                }
            }
        };

        darkModeActivator();
    }, [darkMode]);

    return [darkMode, setDarkMode];
};

export default useDarkMode;
