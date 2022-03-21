import React from "react";
import { Link } from "react-router-dom";

function MoviesListEntry({moviesList}) {
    return (
        Object.keys(moviesList).length > 0 ?
        <div className="movieList">
            <span className="movieListName">Name: <Link to={"/movies-lists/"+moviesList.id}><strong>{moviesList.title}</strong></Link></span>
            <span className="movieListUser">User: <Link to={"/user/"+moviesList.user.id}><strong>{moviesList.user.name}</strong></Link></span>
        </div>
        :
        <div className="movieList">
            Loading...
        </div>
    );
}

export default MoviesListEntry;
