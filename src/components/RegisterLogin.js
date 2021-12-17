import React from "react";

const authenticated = false;
const username = "Itamar C";

function RegisterLogin() {
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
