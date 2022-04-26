import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import MovieListEntry from "../components/MoviesListEntry";
import MoviesListService from "../services/MoviesListService";

function MoviesList() {
    const params = useParams();
    const [moviesList, setMoviesList] = useState({});

    useEffect(() => {
        MoviesListService.getMoviesListWithMovies(parseInt(params.moviesListId)).then(
            response => {
                setMoviesList(response.data);
            }).catch(error => {
                console.error(error);
            });
    }, [params.moviesListId]);

    let movies = moviesList.movies || [];

    if (Object.keys(moviesList).length !== 0) {
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
    } else {
        return <div>Loading...</div>;
    }
}

export default MoviesList;
