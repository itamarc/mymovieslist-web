import axios from 'axios';
import AuthService from '../services/AuthService';

import { API_BASE_URL } from '../constants';

class UserService {
    async getUserWithMoviesLists(userId) {
        try {
            if (!userId) {
                return Promise.reject("No user id provided.");
            }
            const response = await axios.get(
                API_BASE_URL + '/users/' + userId,
                { headers: AuthService.authHeader() }
            );
            return response.data;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default new UserService();
