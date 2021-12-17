import React from 'react';
import { useNavigate } from 'react-router-dom';

import RegisterLogin from './RegisterLogin';

function Menu() {
    const navigate = useNavigate()
    return (
        <div className='menu-items'>
            <button className="menu-item" onClick={() => navigate("/")}>Home</button>
            <button className="menu-item" onClick={() => navigate("/about")}>About</button>
            <RegisterLogin />
        </div>
    );
}

export default Menu;
