import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Snackbar } from '@mui/material';
import AuthService from '../services/AuthService';
import { AuthContext } from '../nav/context';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        AuthService.login(email, password).then(() => {
            auth.userData = JSON.parse(localStorage.getItem("userData"));
            navigate("/");
        }).catch(error => {
            AuthService.logout();
            auth.userData = null;
            setStatus('error');
            setStatusMessage((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }

    return (
        <>
        <form className="auth_form" onSubmit={handleSubmit}>
            <label id="emailLabel" htmlFor="email">Email address:</label>
            <input id="emailInput" type="email" className="form-control" placeholder="Enter email" autoFocus
                   value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input id="passwordInput" type="password" className="form-control" placeholder="Password"
                   value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Snackbar open={status !== ''}
            autoHideDuration={6000}
            onClose={() => { setStatus(''); setStatusMessage(''); } }
            message={statusMessage}
            severity={status}
        />
      </>
    );
}

export default LoginForm;
