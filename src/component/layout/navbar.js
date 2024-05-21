import React from 'react';
import './navbar.css';
import Logo from '../../component/image/Logo192.png'; // Use a different name if necessary

const Navbar = ({ navigateTo }) => {
    return (
        <div className="navbar">
            <img src={Logo} alt="Logo" className="logo"/>
            {/* <div>Portfolio</div> */}
            <div className="nav-links">
                <div className="navbar">
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
