import React, {useEffect, useRef} from 'react';

const useClick = (onClick) => {
    const element = useRef();
    
    useEffect(() => {
    if (typeof onClick !== "function") { return; }
        if (element.current) {
            element.current.addEventListener('click', onClick);
        }
        return () => {
            element.current.removeEventListener('click', onClick);

        };
    },[]);

    return element;
}