import React, {useState, useEffect} from 'react';

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle);
    return setTitle;
}

const App = () => {
    const titleUpdater = useTitle("Loding...");
    setTimeout(() => titleUpdater("home"), 5000);
    return (
        <div className="App">
            <div>H1</div>
            
        </div>
    );
};

export default App;
