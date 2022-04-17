import axios from 'axios';
import AuthService from '../services/AuthService';

import { API_BASE_URL } from '../constants';

class UserService {
    getUserWithMoviesLists(userId) {
        return axios.get(
                API_BASE_URL + '/users/' + userId,
                { headers: AuthService.authHeader() }
        ).then(response => {
            return response.data;
        }).catch(error => {
            return Promise.reject(error);
        });
    }
}

export default new UserService();
