import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";
import LoginForm from "../components/LoginForm";

export default function Login() {
    let location = useLocation();

    return (
        <div className="auth_page">
            <h1>Login</h1>
            {location.state && location.state.error &&
                <Alert severity="error" sx={{ marginBottom: '1em' }}><AlertTitle>Login failed</AlertTitle>{location.state.error}</Alert>}
            <LoginForm />
            <p>or:</p>
            <GoogleLoginButton buttonText={"Login with Google"}/>
        </div>
    );
}
