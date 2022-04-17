import React from "react";
import { Link } from "react-router-dom";

function MoviesListEntry({user,moviesList}) {
    if (typeof user === "undefined") {
        user = moviesList.user;
    }
    return (
        Object.keys(moviesList).length > 0 ?
        <div className="movieList">
            <span className="movieListName">Name: <Link to={"/movies-lists/"+moviesList.id}><strong>{moviesList.title}</strong></Link></span>
            <span className="movieListUser">User: <Link to={"/user/"+user.id}><strong>{user.name}</strong></Link></span>
        </div>
        :
        <div className="movieList">
            Loading...
        </div>
    );
}

export default MoviesListEntry;
