import axios from 'axios';
import authHeader from './auth-header';
import { API_BASE_URL } from '../constants';

class MoviesListService {
    getMoviesLists(page) {
        if (!page) {
            page = '1';
        }
        return axios.get(API_BASE_URL + '/movies-lists?page=' + page);
    }

    getMoviesList(moviesListId) {
        return axios.get(API_BASE_URL + '/movies-lists/' + moviesListId, { headers: authHeader() });
    }

    getMoviesListWithMovies(moviesListId) {
        return axios.get(API_BASE_URL + '/movies-lists/' + moviesListId + '/movies' );
    }
}

export default new MoviesListService();
