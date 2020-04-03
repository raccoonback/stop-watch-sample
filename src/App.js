import React from 'react';
import {
    Route,
    BrowserRouter
} from "react-router-dom";
import Main from './page/main';

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={Main}/>
        </BrowserRouter>
    );
}

export default App;
