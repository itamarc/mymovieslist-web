import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import User from "../components/User";
import MovieListEntry from "../components/MoviesListEntry";
import { getMoviesListsByUser, getUserByEmail } from "../data/MoviesListData"
import { AuthContext } from "../nav/context";


function Profile() {
    const params = useParams();
    let auth = useContext(AuthContext);
    let userId = getUserId(params, auth);

    let moviesLists = getMoviesListsByUser(parseInt(userId));

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
    if (typeof params.userId === "undefined") {
        if (typeof auth !== "undefined") {
            return getUserByEmail(auth.userData.email).id;
        } else {
            return "";
        }
    } else {
        return params.userId;
    }
}

export default Profile;
