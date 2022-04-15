import React, { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../constants";

function OAuth2RedirectHandler() {
    let location = useLocation();

    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let accessToken = params.get("access_token");
        console.log("xOAuth2RedirectHandler accessToken:", accessToken);
        if (accessToken) {
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            Navigate("/");
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
        return <Navigate to={{
            pathname: "/user",
            state: { from: location }
        }}/>; 
    } else {
        return <Navigate to={{
            pathname: "/login",
            state: { 
                from: location,
                error: error 
            }
        }}/>; 
    }
}

export default OAuth2RedirectHandler;
