
import { useState, useEffect } from 'react';

const useInnerWidth = (): number => {
    const [width, setWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width;
};

export default useInnerWidth;
