import React from "react";
import { Link } from "react-router-dom";

function MovieList({moviesList}) {
    return (
        <div className="movieList">
            <span className="movieListName">Name: <Link to={"/moviesList/"+moviesList.id}><strong>{moviesList.name}</strong></Link></span>
            <span className="movieListUser">User: <strong>{moviesList.user}</strong></span>
        </div>
    );
}

export default MovieList;
