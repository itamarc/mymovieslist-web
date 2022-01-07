import React from "react";

function Movie({movie}) {
    return (
        <div className="movie" key={movie.id}>
            {/* <img src={movie.img} alt={movie.title} className="movieImg" /> */}
            <span className="movieTitle">Title: <strong>{movie.title}</strong></span>
            <span className="movieYear">Year: <strong>{movie.year}</strong></span>
            <span className="movieCategory">Categories: <strong>{movie.categories === undefined ? "-" : movie.categories.join(", ")}</strong></span>
        </div>
    );
}

export default Movie;
