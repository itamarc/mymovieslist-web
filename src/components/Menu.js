import React from 'react';
import { useNavigate } from 'react-router-dom';

import RegisterLoginButtons from './RegisterLoginButtons';

function Menu() {
    const navigate = useNavigate()
    return (
        <div className='menu-items'>
            <button className="menu-item" onClick={() => navigate("/")}>Home</button>
            <button className="menu-item" onClick={() => navigate("/about")}>About</button>
            <RegisterLoginButtons />
        </div>
    );
}

export default Menu;
