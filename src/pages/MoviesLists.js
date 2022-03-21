import React, { useEffect, useState } from "react";
import MovieListEntry from "../components/MoviesListEntry";
import MoviesListService from "../services/MoviesListService";

function MoviesLists() {
    const [moviesLists, setMoviesLists] = useState([]);

    useEffect(() => {
      MoviesListService.getMoviesLists().then(response => {
        setMoviesLists(response.data)
      });
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
