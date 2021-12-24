import React, { useEffect, useState } from "react";
import MovieListEntry from "../components/MovieListEntry"

function MovieLists() {
    const [moviesLists, setMoviesLists] = useState([]);

    useEffect(() => {
        setMoviesLists(getMockMoviesLists())
    }, [])
    

    return (
        <div>
            <h1>Movie Lists:</h1>
            {moviesLists.map(movieList => (
          <MovieListEntry key={movieList.id}
            movieList={movieList}
          />
        ))}

        </div>
    );

    function getMockMoviesLists() {
        return [
            {
                id: 1,
                name: "My list",
                user: "Itamar"
            },
            {
                id: 2,
                name: "Sci-fi Movies",
                user: "Itamar"
            },
            {
                id: 3,
                name: "Romance Movies",
                user: "Jane Doe"
            },
        ];
    }
}

export default MovieLists;
