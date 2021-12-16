import React from 'react';

import RegisterLogin from './RegisterLogin';

function Menu() {
    return (
        <header className="menu">
            <h1><img src="/mml-logo120.png" alt="My Movies List" /> My Movies List</h1>
            <div className='menu-items'>
                <div className="menu-item">
                    <a href="#">Home</a>
                </div>
                <div className="menu-item">
                    <a href="#">About</a>
                </div>
                <RegisterLogin />
            </div>
        </header>
    );
}

export default Menu;
