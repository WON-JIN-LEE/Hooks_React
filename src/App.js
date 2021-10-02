import React, {useEffect} from 'react';

const useBeforeLeave = (onBefore) => {

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
const App = () => {
    const begForLife = () => console.log("Plz dont leave");
    useBeforeLeave(begForLife);
    return (
        <div className="App">
            <h1>HELLO</h1>
        </div>
    );
};

export default App;
