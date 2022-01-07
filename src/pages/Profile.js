import React from "react";
import { useParams } from "react-router-dom";
import User from "../components/User";
import MovieListEntry from "../components/MoviesListEntry";
import { getMoviesListsByUser } from "../data/MoviesListData"


function Profile() {
    const params = useParams();
    let moviesLists = getMoviesListsByUser(parseInt(params.userId));
    console.log("Profile:");
    console.log(moviesLists);
    return (
        <div>
            <User userId={params.userId}/>
            <h1>Movies Lists:</h1>
            { moviesLists.map(moviesList => (
            <MovieListEntry key={moviesList.id}
                moviesList={moviesList}
            />
            ))}
    </div>
    );
}

export default Profile;
