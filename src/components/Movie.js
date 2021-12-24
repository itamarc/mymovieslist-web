import React from "react";

function Movie({movie}) {
    return (
        <div className="movie" key={movie.id}>
            {/* <img src={movie.img} alt={movie.title} className="movieImg" /> */}
            <span className="movieTitle">Title: <strong>{movie.title}</strong></span>
            <span className="movieYear">Year: <strong>{movie.year}</strong></span>
            <span className="movieCategory">Category: <strong>{movie.category}</strong></span>
        </div>
    );
}

export default Movie;
