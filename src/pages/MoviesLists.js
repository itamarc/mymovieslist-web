import React, { useEffect, useState } from "react";
import MovieListEntry from "../components/MovieListEntry";
import { getMoviesLists } from "../data/MoviesListData";

function MoviesLists() {
    const [moviesLists, setMoviesLists] = useState([]);

    useEffect(() => {
        setMoviesLists(getMoviesLists())
    }, [])

    return (
        <div>
            <h1>Movies Lists:</h1>
            { moviesLists.map(moviesList => (
              <MovieListEntry key={moviesList.id}
                moviesList={moviesList}
              />
            ))}
        </div>
    );
}

export default MoviesLists;
