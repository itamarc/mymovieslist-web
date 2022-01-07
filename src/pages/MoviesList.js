import React from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import MovieListEntry from "../components/MoviesListEntry";
import { getMoviesByListId, getMoviesList } from "../data/MoviesListData"

function MoviesList() {
    const params = useParams();
    console.log("params.moviesListId: "+params.moviesListId);
    let moviesList = getMoviesList(parseInt(params.moviesListId));
    console.log("moviesList: ")
    console.log(moviesList)
    let movies = getMoviesByListId(params.moviesListId);

    return (
        <div>
            <h1>Movies List:</h1>
            <MovieListEntry moviesList={moviesList} />
            <h2>Movies:</h2>
            { movies.map(movie => (
                <Movie
                    key={movie.id}
                    movie={movie}
                />
        ))}

        </div>
    );
}

export default MoviesList;
