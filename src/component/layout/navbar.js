import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">Portfolio</div>
            <div className="nav-links">
                <div className="menu-container">
                    <NavLink to="/homepage" className="nav-link" activeClassName="active-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link" activeClassName="active-link">About</NavLink>
                    <NavLink to="/skill" className="nav-link" activeClassName="active-link">Skills</NavLink>
                    <NavLink to="/services" className="nav-link" activeClassName="active-link">Services</NavLink>
                    <NavLink to="/contact" className="nav-link" activeClassName="active-link">Contact</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
