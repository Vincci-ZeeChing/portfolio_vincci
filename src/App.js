import React, { useState } from 'react';
import './App.css';
import Navbar from './component/layout/navbar';
import Homepage from './view/homepage';
import About from './view/about';
import Skill from './view/skill';
import Services from './view/services';
import Contact from './view/contact';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    const [route, setRoute] = useState('/');

    const navigateTo = (newRoute) => {
        setRoute(newRoute);
    };

    return (
        <Router>
            <div className="App">
                <Navbar navigateTo={navigateTo} />
                {route === '/' && <Homepage />}
                {route === '/about' && <About />}
                {route === '/skill' && <Skill />}
                {route === '/services' && <Services />}
                {route === '/contact' && <Contact />}
            </div>
        </Router>
    );
}

export default App;
