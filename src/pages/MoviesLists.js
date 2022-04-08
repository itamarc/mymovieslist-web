import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieListEntry from "../components/MoviesListEntry";
import MoviesListService from "../services/MoviesListService";

function MoviesLists() {
    const [moviesLists, setMoviesLists] = useState([]);
    const [pagingData, setPagingData] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    
    useEffect(() => {
      setPage(parseInt(searchParams.get("page")) || 1);
    }, [searchParams]);
  
    useEffect(() => {
      MoviesListService.getMoviesLists(page).then(response => {
        let {content, ...rest} = response.data;
        setMoviesLists(content);
        setPagingData(rest);
      });
    }, [page]);

    function handlePageChange(newPage) {
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
            <div className="pagination">
              <button
                className="btn btn-primary"
                disabled={pagingData.currentPage <= 1}
                onClick={() => handlePageChange(page - 1)}
              >
                &lt;
              </button>
              <button
                className="btn btn-primary"
                disabled={ pagingData.last }
                onClick={() => handlePageChange(page + 1)}
              >
                &gt;
              </button>
            </div>
        </div>
    );
}

export default MoviesLists;
