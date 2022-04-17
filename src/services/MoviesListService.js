import axios from 'axios';
import { API_BASE_URL } from '../constants';

class MoviesListService {
    getMoviesLists(page) {
        if (!page) {
            page = '1';
        }
        return axios.get(API_BASE_URL + '/movies-lists?page=' + page);
    }

    getMoviesList(moviesListId) {
        return axios.get(API_BASE_URL + '/movies-lists/' + moviesListId);
    }

    getMoviesListWithMovies(moviesListId) {
        return axios.get(API_BASE_URL + '/movies-lists/' + moviesListId + '/movies' );
    }
}

export default new MoviesListService();
