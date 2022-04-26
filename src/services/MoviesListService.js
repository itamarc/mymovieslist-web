import axios from 'axios';
import { API_BASE_URL } from '../constants';

class MoviesListService {
    async getMoviesLists(page) {
        if (!page) {
            page = '1';
        }
        return await axios.get(API_BASE_URL + '/movies-lists?page=' + page);
    }

    async getMoviesList(moviesListId) {
        return await axios.get(API_BASE_URL + '/movies-lists/' + moviesListId);
    }

    async getMoviesListWithMovies(moviesListId) {
        return await axios.get(API_BASE_URL + '/movies-lists/' + moviesListId + '/movies' );
    }
}

export default new MoviesListService();
