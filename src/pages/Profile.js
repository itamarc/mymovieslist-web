import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import User from "../components/User";
import MovieListEntry from "../components/MoviesListEntry";
import { AuthContext } from "../nav/context";
import UserService from "../services/UserService";
import AuthService from "../services/AuthService";


function Profile() {
    const params = useParams();
    let auth = useContext(AuthContext);
    let userId = getUserId(params, auth);
    const [userAndLists, setUserAndLists] = useState({});
    const [moviesLists, setMoviesLists] = useState([]);

    useEffect(() => {
        if (userId) {
        UserService.getUserWithMoviesLists(userId)
            .then(user => {
                setUserAndLists(user);
                setMoviesLists(user.moviesLists);
            }).catch(error => {
                console.error(error);
            });
        }
    }, [userId]);

    return (
        <div>
            <User userId={userId}/>
            <h1>Movies Lists:</h1>
            { moviesLists.map(moviesList => (
            <MovieListEntry key={moviesList.id}
                user={userAndLists}
                moviesList={moviesList}
            />
            ))}
    </div>
    );
}

function getUserId(params, auth) {
    if (params.userId) {
        return params.userId;
    } else if (auth?.userData?.id) {
        return auth.userData.id;
    } else {
        AuthService.getCurrentUser()
            .then((user) => {
                auth.login(user);
                return user.id;
            }).catch(error => {
                console.error(error);
                auth.logout();
                return null;
            });
    }
}

export default Profile;
