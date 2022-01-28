import React from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import { searchMovies } from "../data/ExternalMoviesApi";

function SearchResult() {
    const params = useParams();
    let searchResult = searchMovies(params.movie_search_input);

    return (
        <div>
            <h2>Movies:</h2>
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
