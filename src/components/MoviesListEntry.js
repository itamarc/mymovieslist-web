import React from "react";
import { Link } from "react-router-dom";

function MoviesListEntry({moviesList}) {
    return (
        <div className="movieList">
            <span className="movieListName">Name: <Link to={"/moviesList/"+moviesList.id}><strong>{moviesList.name}</strong></Link></span>
            <span className="movieListUser">User: <Link to={"/user/"+moviesList.user.id}><strong>{moviesList.user.name}</strong></Link></span>
        </div>
    );
}

export default MoviesListEntry;
