import React from "react";
import GoogleLoginButton from "../components/GoogleLoginButton";
import LoginForm from "../components/LoginForm";

export default function Login() {
    return (
        <div className="auth_page">
            <h1>Login</h1>
            <LoginForm />
            <p>or:</p>
            <GoogleLoginButton buttonText={"Login with Google"}/>
        </div>
    );
}
