import React from "react";

const authenticated = false;

function RegisterLogin() {
    if (authenticated) {
        return (
            <div className="menu-item">
                <a href="#">Contact</a>
            </div>
        );
    } else {
        return (
            <span className='menu-items'>
                <div className="menu-item">
                <a href="#">Register</a>
            </div>
            <div className="menu-item">
                <a href="#">Login</a>
            </div>
            </span>
        );
    }
}

export default RegisterLogin;
