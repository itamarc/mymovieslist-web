import React, { useContext } from 'react';
import { AuthContext } from "../nav/context";
import { getUserById } from "../data/MoviesListData"

function User({userId}) {
    let auth = useContext(AuthContext);
    let userData = getUserData(parseInt(userId), auth);

    return (
        <div id="user">
            <img id="avatar" src={userData.imageUrl} alt={userData.name}/>
            <div id="username">User: {userData.name}</div>
            <div id="email">E-mail: {userData.email}</div>
        </div>
    );
}

function getUserData(userId, auth) {
    if (typeof userId === "undefined" && typeof auth !== "undefined") {
        return auth.userData;
    } else {
        return getUserById(userId);
    }
}

export default User;
