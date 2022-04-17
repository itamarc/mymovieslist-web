import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import User from "../components/User";
import MovieListEntry from "../components/MoviesListEntry";
import { AuthContext } from "../nav/context";
import UserService from "../services/UserService";


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
    } else if (typeof auth !== "undefined" && typeof auth.userData !== "undefined"
        && typeof auth.userData.id !== "undefined") {
        return auth.userData.id;
    } else {
        return "";
    }
}

export default Profile;
