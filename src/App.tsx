import React from 'react';
import {GlobalStyle} from "./styles/global";
import {Router} from './components'

function App() {
    console.log(process.env.REACT_APP_API_LOGIN, "process.env.REACT_APP_API_LOGIN")
    return (
        <>
            <GlobalStyle/>
            <Router/>
        </>
    );
}

export default App;
