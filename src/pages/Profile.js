import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import User from "../components/User";
import MovieListEntry from "../components/MoviesListEntry";
import { AuthContext } from "../nav/context";
import AuthService from "../services/AuthService";


function Profile() {
    const params = useParams();
    let auth = useContext(AuthContext);
    let userId = getUserId(params, auth);

    let userAndLists = AuthService.getCurrentUser();
    console.log("Profile.userAndLists: ", userAndLists);
    let moviesLists = userAndLists.moviesLists;
    console.log("Profile.moviesLists: ", moviesLists);

    return (
        <div>
            <User userId={userId}/>
            <h1>Movies Lists:</h1>
            { moviesLists.map(moviesList => (
            <MovieListEntry key={moviesList.id}
                moviesList={moviesList}
            />
            ))}
    </div>
    );
}

function getUserId(params, auth) {
    if (typeof auth !== "undefined") {
        return auth.userData.id;
    } else {
        if (typeof params.userId === "undefined") {
            return "";
        } else {
            return params.userId;
        }
    }
}

export default Profile;
