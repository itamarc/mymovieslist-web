import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from "../nav/context";

function RegisterLogin() {
    const navigate = useNavigate()
    let auth = useContext(AuthContext);
    const authenticated = auth.authenticated;
    const username = auth.username;
    
    if (auth.user) {
        return (
            <span className='menu-items'>
                <button className="menu-item" onClick={() => navigate("/user")}>{auth.user}</button>
                <button className="menu-item" onClick={() => auth.signout()}>Logout</button>
            </span>
        );
    } else {
        return (
            <span className='menu-items'>
                <button className="menu-item" onClick={() => navigate("/register")}>Register</button>
                <button className="menu-item" onClick={() => navigate("/login")}>Login</button>
            </span>
        );
    }
}

export default RegisterLogin;
