import React from "react";
import { GOOGLE_AUTH_URL } from "../constants";

export default function GoogleLoginButton({buttonText}) {
    return (
        <a className="google_login_button" href={GOOGLE_AUTH_URL}>
            <img src="/google-logo.png" alt="Google login" />
            {buttonText ? buttonText : "Login with Google"}
        </a>
    );
}
