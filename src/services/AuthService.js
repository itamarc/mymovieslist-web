import axios from "axios";
import { API_BASE_URL } from '../constants';

const API_AUTH_URL = API_BASE_URL + "/auth";

class AuthService {
    login(username, password) {
        return axios
            .post(API_AUTH_URL + "/login", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_AUTH_URL + "/signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();
