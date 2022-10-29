import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1 className='m-4'>Welcome to my rest countries</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/footer">Footer</a>
            </nav>
        </div>
    );
};

export default Header;