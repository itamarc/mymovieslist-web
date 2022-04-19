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
        UserService.getUserWithMoviesLists(userId)
            .then(user => {
                setUserAndLists(user);
                setMoviesLists(user.moviesLists);
            }).catch(error => {
                console.error(error);
            });
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
    if (typeof params.userId !== "undefined") {
        return params.userId;
    } else if (auth && auth.userData && auth.userData.id) {
        return auth.userData.id;
    } else {
        AuthService.getCurrentUser()
            .then((userData) => {
                auth.userData = userData;
                return userData.id;
            }).catch(error => {
                console.error(error);
                return null;
            });
    }
}

export default Profile;
