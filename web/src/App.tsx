// import React, { useState } from 'react';
import React from 'react';
import './App.css';

import Routes from './routes';

// JSX: SINTAXE DE HTML DENTRO DO JAVASCRIPT
function App() {
    return (
        <Routes />
    );
}

export default App;


 /* JSX: SINTAXE DE HTML DENTRO DO JAVASCRIPT
function App() {
   const [ counter, setCounter ] = useState(0); // [valor do estado, função para atulizar o valor do estado]

    function handleButtonClick(){
        setCounter(counter + 1);
    }

    return (
        <div>
            <Header title="Ecoleta"/>
            <Header title="Chama fio"/>

            <h3>{counter}</h3>
            <button type="button" onClick={handleButtonClick}>Aumentar</button>
        </div>
    ); 
}*/
