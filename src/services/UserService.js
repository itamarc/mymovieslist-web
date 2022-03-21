import axios from 'axios';
import authHeader from './auth-header';
import { API_BASE_URL } from '../constants';

class UserService {
    getUserWithMoviesLists(userId) {
        return axios.get(API_BASE_URL + '/users/' + userId, { headers: authHeader() });
    }
}

export default new UserService();
