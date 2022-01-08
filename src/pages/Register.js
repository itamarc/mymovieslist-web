import React from "react";
import RegisterForm from "../components/RegisterForm";
import GoogleLoginButton from "../components/GoogleLoginButton";

function Register() {
    return (
        <div className="auth_page">
            <h1>Register</h1>
            <RegisterForm />
            <p>or:</p>
            <GoogleLoginButton buttonText={"Register with Google"}/>
        </div>
    );
}

export default Register;
