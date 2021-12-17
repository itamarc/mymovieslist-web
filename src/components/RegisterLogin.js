import React, { useContext } from 'react';

import { AuthContext } from "../nav/context";

function RegisterLogin() {
    let auth = useContext(AuthContext);
    const authenticated = auth.authenticated;
    const username = auth.username;
    
    if (authenticated) {
        return (
            <button className="menu-item">{username}</button>
        );
    } else {
        return (
            <span className='menu-items'>
                <button className="menu-item">Register</button>
                <button className="menu-item">Login</button>
            </span>
        );
    }
}

export default RegisterLogin;
