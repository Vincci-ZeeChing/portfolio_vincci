import React from 'react';
import './navbar.css';

const Navbar = ({ navigateTo }) => {
    return (
        <div className="navbar">
            <div className="logo">Portfolio</div>
            <div className="nav-links">
                <div className="menu-container" style={{ display: 'flex', flexDirection: 'row' }}>
                    <div onClick={() => navigateTo('/')} className="nav-link">Home</div>
                    <div onClick={() => navigateTo('/about')} className="nav-link">About</div>
                    <div onClick={() => navigateTo('/skill')} className="nav-link">Skills</div>
                    <div onClick={() => navigateTo('/services')} className="nav-link">Services</div>
                    <div onClick={() => navigateTo('/contact')} className="nav-link">Contact</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
