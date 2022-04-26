import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import MovieListEntry from "../components/MoviesListEntry";
import MoviesListService from "../services/MoviesListService";

function MoviesLists() {
    const [moviesLists, setMoviesLists] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
      setPage(parseInt(searchParams.get("page")) || 1);
    }, [searchParams]);

    useEffect(() => {
      MoviesListService.getMoviesLists(page).then(response => {
        let {content, ...rest} = response.data;
        setMoviesLists(content);
        setPage(rest.currentPage);
        setTotalPages(rest.totalPages);
      });
    }, [page]);

    function handlePagingChange(event, newPage) {
      setSearchParams({ page: newPage });
      setPage(newPage);
    }

    return (
        <div>
            <h1>Movies Lists:</h1>
            { moviesLists.map(moviesList => (
              <MovieListEntry key={moviesList.id}
                moviesList={moviesList}
              />
            ))}
            <Pagination count={totalPages} page={page} onChange={handlePagingChange} />
        </div>
    );
}

export default MoviesLists;
