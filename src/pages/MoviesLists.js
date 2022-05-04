import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Alert, Box, Grid, Pagination, Snackbar, Typography } from "@mui/material";
import MovieListEntry from "../components/MoviesListEntry";
import MoviesListService from "../services/MoviesListService";

function MoviesLists() {
    const [moviesLists, setMoviesLists] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
      setPage(parseInt(searchParams.get("page")) || 1);
    }, [searchParams]);

    useEffect(() => {
      MoviesListService.getMoviesLists(page).then(response => {
        let {content, ...rest} = response.data;
        setMoviesLists(content);
        setPage(rest.currentPage);
        setTotalPages(rest.totalPages);
      }).catch(error => {
        setMoviesLists([]);
        setStatusMessage((error && error.message) || 'Oops! Something went wrong. Please try again!');
      });
    }, [page]);

    function handlePagingChange(event, newPage) {
      setSearchParams({ page: newPage });
      setPage(newPage);
    }

    const handleAlertClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setStatusMessage('');
    };

    return (
        <>
        <Box marginBottom='1em'>
            <Typography variant="h4">Movies Lists</Typography>
            <Grid container spacing={1} justifyContent="space-between">
            { moviesLists.map(moviesList => (
              <MovieListEntry key={moviesList.id}
                moviesList={moviesList}
              />
            ))}
            </Grid>
        </Box>
        <Pagination count={totalPages} page={page} onChange={handlePagingChange} margin='0.5em 0em 0em 0em' />
        <Snackbar open={statusMessage !== ''} autoHideDuration={10000}
            onClose={handleAlertClose}>
            <Alert onClose={handleAlertClose} severity='error' sx={{ width: '100%'}}>
                {statusMessage}</Alert>
        </Snackbar>
        </>
    );
}

export default MoviesLists;
