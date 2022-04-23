import React from "react";
import { useLocation } from "react-router-dom";
import Movie from "../components/Movie";
import { searchMovies } from "../data/ExternalMoviesApi";

function SearchResult() {
    let location = useLocation();
    let searchString = location.state.searchString;
    let searchResult = searchMovies(searchString);

    return (
        <div>
            <h2>Movies found with search parameter:</h2>
            <h3>'{searchString}'</h3>
            { searchResult.map(movie => (
                <Movie
                    key={movie.id}
                    movie={movie}
                />
        ))}

        </div>
    );
}

export default SearchResult;
