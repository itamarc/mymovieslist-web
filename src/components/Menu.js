import React from 'react';

import RegisterLogin from './RegisterLogin';

function Menu() {
    return (
        <div className='menu-items'>
            <button className="menu-item">Home</button>
            <button className="menu-item">About</button>
            <RegisterLogin />
        </div>
    );
}

export default Menu;
