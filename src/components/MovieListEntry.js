import React from "react";
import { Link } from "react-router-dom";

function Movie({movieList}) {
    return (
        <div className="movieList">
            <span className="movieListName">Name: <Link to={"/movieList/"+movieList.id}><strong>{movieList.name}</strong></Link></span>
            <span className="movieListUser">User: <strong>{movieList.user}</strong></span>
        </div>
    );
}

export default Movie;
