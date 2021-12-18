import React, { useContext } from 'react';
import { AuthContext } from "../nav/context";

function User() {
    let auth = useContext(AuthContext);

    return (
        <div id="user">
            <img id="avatar" src={auth.userData.imageUrl} alt={auth.userData.name}/>
            <div id="username">User: {auth.userData.name}</div>
            <div id="email">E-mail: {auth.userData.email}</div>
        </div>
    );
}

export default User;
