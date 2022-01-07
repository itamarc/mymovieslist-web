import React from 'react';
import Login from '../pages/Login';

function RegisterForm() {
    return (
        <div id="register_page">
            <form id="register_form">
                <label id="nameLabel" htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" placeholder="Name" required />
                <label id="emailLabel" htmlFor="email">Email address:</label>
                <input id="email" type="email" className="form-control" placeholder="Enter email" />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" className="form-control" placeholder="Password" />
                <label htmlFor="passwordConfirmation">Confirm Password:</label>
                <input id="passwordConfirmation" type="password" className="form-control" placeholder="Password" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p>or:</p>
            <Login buttonText={"Register with Google"}/>
        </div>
    );
}

export default RegisterForm;
