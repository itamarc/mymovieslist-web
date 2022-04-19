import axios from "axios";
import { Buffer } from "buffer";

import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const API_AUTH_URL = API_BASE_URL + "/auth";

class AuthService {
    async login(email, password) {
        try {
            const response = await axios.post(API_AUTH_URL + "/login", {
                email: email,
                password: password
            });
            const data = await response.data;
            if (data.accessToken) {
                localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
            }
            return data;
        } catch (error) {
            return await Promise.reject(error);
        }
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

    async getCurrentUser() {
        var token = localStorage.getItem(ACCESS_TOKEN);
        if(!token) {
            return Promise.reject("No user authenticated.");
        }

        if (this.isTokenExpired(token)) {
            this.logout();
            return Promise.reject("Authentication expired.");
        }

        var userData = localStorage.getItem("userData");
        if (userData && this.decodeTokenPayload(token).sub === userData.id) {
            return userData;
        }

        const result = await axios.get(
            API_BASE_URL + "/user/me",
            { headers: this.authHeader() }
        );
        const data = result.data;
        localStorage.setItem("userData", JSON.stringify(data));
        return data;
    }

    authHeader() {
        var token = localStorage.getItem(ACCESS_TOKEN);
        if(!token || this.isTokenExpired(token)) {
            return {};
        } else {
            return { Authorization: "Bearer " + token };
        }
    }

    isTokenExpired(token) {
        const tokenPayload = this.decodeTokenPayload(token);
        const exp = tokenPayload.exp;
        const expired = (Date.now() >= exp * 1000)
        return expired
    }

    decodeTokenPayload(token) {
        const payloadBase64 = token.split('.')[1];
        const decodedJson = Buffer.from(payloadBase64, 'base64').toString();
        const decoded = JSON.parse(decodedJson)
        return decoded;
    }
}

export default new AuthService();
