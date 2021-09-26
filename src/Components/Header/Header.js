import React from 'react';
import './Header.css';
import logo from '../../images/nsu.png'

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <a href="/Home">Home</a>
                <a href="/Academic">Academic</a>
                <a href="/Faculty">Faculty</a>
                <a href="/Addmission">Admission</a>
                <a href="/Research">Research</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
            </nav>
            <h2>Admission is going on </h2>
            <h3>Total Cost aapproximately 2000000</h3>

            <div className="header-content">
                <div className="img-container">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h1 className="header-text"><span>North South</span></h1>
                    <h1> University</h1>
                    <p>Ranking in Bangladesh : 01</p>
                </div>
            </div>
        </div>
    );
};

export default Header;