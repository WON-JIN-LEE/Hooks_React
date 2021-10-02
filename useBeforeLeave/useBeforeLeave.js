import React, {useEffect} from 'react';

export const useBeforeLeave = (onBefore) => {

    const handles = (event) => {
        const { clientY } = event;
        if (clientY <= 0) { onBefore(); }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handles);
        return () => document.removeEventListener("mouseleave", handles);
    }, []);

    if (typeof onBefore !== "function") {
        return;
    }
};