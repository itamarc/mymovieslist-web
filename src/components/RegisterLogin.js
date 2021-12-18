import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from "../nav/context";

function RegisterLogin() {
    const navigate = useNavigate()
    let auth = useContext(AuthContext);

    function signoutCallback() {
        console.log("signoutCallback");
    }
    
    if (auth.user) {
        return (
            <span className='menu-items'>
                <button className="menu-item" onClick={() => navigate("/user")}><img id="userimg" src={auth.userData.imageUrl}/>{auth.userData.name}</button>
                <button className="menu-item" onClick={() => auth.signout(signoutCallback)}>Logout</button>
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
