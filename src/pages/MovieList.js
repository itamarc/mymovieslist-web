import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import MovieListEntry from "../components/MovieListEntry";
import { getMoviesLists } from "../data/MoviesListData"

function MovieList({movieList}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(getMoviesLists())
    }, [])

    return (
        <div>
            <h1>Movie List:</h1>
            <MovieListEntry movieList={movieList} />
            {movies.map(movie => (
          <Movie
            // key={movie.id}
            movie={movie}
          />
        ))}

        </div>
    );
}

export default MovieList;
