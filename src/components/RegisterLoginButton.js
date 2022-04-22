import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import RegisterLoginDialog from './RegisterLoginDialog';
import { AuthContext } from "../nav/context";

function RegisterLoginButton() {
    const navigate = useNavigate()
    let auth = useContext(AuthContext);

    const logout = () => {
        auth.logout();
        navigate("/");
    }

    if (auth.authenticated) {
        return (
            <span className='menu-items'>
                <button className="menu-item" onClick={() => navigate("/user")}><img id="userimg"
                    src={auth.userData.imageUrl} alt={auth.userData.name}/>{auth.userData.name}</button>
                <button className="menu-item" onClick={logout}>Logout</button>
            </span>
        );
    } else {
        return (
            <RegisterLoginDialog />
        );
    }
}

export default RegisterLoginButton;
