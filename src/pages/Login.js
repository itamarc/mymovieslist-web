import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate, useLocation } from "react-router-dom";
import { google_client_id } from "../nav/auth-data";
import { AuthContext } from "../nav/context";

export default function Login({buttonText}) {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useContext(AuthContext);
  
    let from = location.state?.from?.pathname || "/";

    if (typeof buttonText === "undefined") {
        buttonText = "Login";
    }

    function handleSubmit(response) {
        console.log(response);

        auth.signin(response.profileObj, () => {
            // Send them back to the page they tried to visit when they were
            // redirected to the login page. Use { replace: true } so we don't create
            // another entry in the history stack for the login page.  This means that
            // when they get to the protected page and click the back button, they
            // won't end up back on the login page, which is also really nice for the
            // user experience.
            navigate(from, { replace: true });
        });
    }
    
    return (
        <GoogleLogin
            clientId={google_client_id}
            buttonText={buttonText}
            onSuccess={handleSubmit}
            onFailure={handleSubmit}
            className="google_login_button"
            theme="dark"
            // render={{
            //     theme: "filled_black",
            //     size: "large",
            //     type: "standard",
            //     shape: "pill",
            //     locale: "en",
            //     logo_alignment: "left",
            // }}
            />
    );
}
