import axios from "axios";
import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const API_AUTH_URL = API_BASE_URL + "/auth";

class AuthService {
    login(email, password) {
        return axios
            .post(API_AUTH_URL + "/login", {
                email: email,
                password: password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
                    this.getCurrentUser();
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem("userData");
    }

    register(username, email, password) {
        return axios.post(API_AUTH_URL + "/signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        var token = localStorage.getItem(ACCESS_TOKEN);
        if(!token) {
            return Promise.reject("No access token set.");
        }

        return axios.get(
                API_BASE_URL + "/user/me",
                { headers: { Authorization: "Bearer " + token }}
            ).then(response => {
                localStorage.setItem("userData", JSON.stringify(response.data));
                return response.data;
            });
    }
}

export default new AuthService();
