import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from "../nav/context";
import UserService from "../services/UserService";

function User() {
    const params = useParams();
    const auth = useContext(AuthContext);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        let user = getUserData(params.userId, auth);
        if (user instanceof Promise) {
            user.then(user => setUserData(user));
        } else {
            setUserData(user);
        }
    }, [params, auth]);

    return (
        <div id="user">
            <img id="avatar" src={userData.imageUrl} alt={userData.name}/>
            <div id="username">User: {userData.name}</div>
            <div id="email">E-mail: {userData.email}</div>
        </div>
    );
}

function getUserData(userId, auth) {
    if (typeof userId === "undefined" &&
        typeof auth !== "undefined" && typeof auth.userData !== "undefined") {
        return auth.userData;
    } else if (typeof auth !== "undefined" && typeof auth.userData !== "undefined"
        && typeof auth.userData.id !== "undefined" && auth.userData.id === userId) {
        return auth.userData;
    } else {
        return UserService.getUserWithMoviesLists(parseInt(userId))
            .then(user => {
                return user;
            });
    }
}

export default User;
