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
const App = () => {
    const sayHello =() => console.log("hello");
    const title = useClick(sayHello);
    return (
        <div className="App">
            <h1 ref={title}>H1</h1>
        </div>
    );
};

export default App;
