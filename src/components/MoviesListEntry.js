import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from '../nav/context';

function MoviesListEntry({user,moviesList}) {
    const auth = useContext(AuthContext);

    if (typeof user === "undefined") {
        user = moviesList.user;
    }
    return (
        Object.keys(moviesList).length > 0 ?
        <div className="movieList">
            <span className="movieListName">Name: <Link to={"/movies-lists/"+moviesList.id}><strong>{moviesList.title}</strong></Link></span>
            <span className="movieListUser">User: { auth.authenticated ? <Link to={"/user/"+user.id}><strong>{user.name}</strong></Link> : <strong>{user.name}</strong>}</span>
        </div>
        :
        <div className="movieList">
            Loading...
        </div>
    );
}

export default MoviesListEntry;
