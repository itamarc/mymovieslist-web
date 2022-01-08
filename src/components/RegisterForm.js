import React from 'react';

function RegisterForm() {
    return (
        <form className="auth_form">
            <label id="nameLabel" htmlFor="name">Name:</label>
            <input id="nameInput" type="text" name="name" placeholder="Name" required />
            <label id="emailLabel" htmlFor="email">Email address:</label>
            <input id="emailInput" type="email" className="form-control" placeholder="Enter email" />
            <label htmlFor="password">Password:</label>
            <input id="passwordInput" type="password" className="form-control" placeholder="Password" />
            <label htmlFor="passwordConfirmation">Confirm Password:</label>
            <input id="passwordConfirmationInput" type="password" className="form-control" placeholder="Password" />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default RegisterForm;
