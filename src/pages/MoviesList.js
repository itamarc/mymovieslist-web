import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

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
            <>
                <Typography variant="h5">Movies List</Typography>
                <MovieListEntry moviesList={moviesList} />
                <Typography variant="h6">Movies:</Typography>
                <Grid container spacing={1} justifyContent="space-between">
                { movies.map(movie => (
                    <Movie
                        key={movie.id}
                        movie={movie}
                    />
                ))}
                </Grid>
            </>
        );
    } else {
        return <div>Loading...</div>;
    }
}

export default MoviesList;
