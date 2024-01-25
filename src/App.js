import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Homepage from './view/homepage';

function App() {
    return (
        <Router>
            <div className="App">
                <Homepage />
            </div>
        </Router>
    );
}

export default App;
