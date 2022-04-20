import React, { useEffect, useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";

import { ACCESS_TOKEN } from "../constants";
import { AuthContext } from '../nav/context';
import AuthService from "../services/AuthService";

function OAuth2RedirectHandler() {
    let location = useLocation();
    const auth = useContext(AuthContext);

    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let accessToken = params.get("token");
        console.log("xOAuth2RedirectHandler accessToken:", accessToken);
        if (accessToken) {
            localStorage.setItem(ACCESS_TOKEN, accessToken);
        }
    }, [location]);

    const getUrlParameter = (name) => {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    const token = getUrlParameter('token');
    const error = getUrlParameter('error');

    if (token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        (async () => {
            const user = await AuthService.getCurrentUser();
            auth.login(user);
        })();
        return <Navigate to="/user" state={{ from: location }} />;
    } else {
        return <Navigate to="/login" state={{ from: location, error: error }} />;
    }
}

export default OAuth2RedirectHandler;
