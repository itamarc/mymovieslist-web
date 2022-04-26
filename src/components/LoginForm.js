import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertTitle, Box, Button, Paper, Snackbar, Stack, TextField } from '@mui/material';
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

        AuthService.login(email, password)
            .then((token) => {
                console.log("token:");
                console.log(token);
                AuthService.getCurrentUser()
                    .then((user) => {
                        auth.login(user);
                    });
                navigate("/");
            }).catch(error => {
                auth.logout();
                setStatus('error');
                setStatusMessage((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setStatus('');
        setStatusMessage('');
    }

    return (
        <>
        <Paper elevation={2} sx={{ width: '30em', padding: '1em', alignContent: 'center' }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }} >
            <Stack spacing={2} sx={{ width: '100%' }}>
                <TextField autoFocus={true} id="emailInput" label="Email" value={email} type="email" size="small" fullWidth
                        onChange={(e) => setEmail(e.target.value)} />
                <TextField id="passwordInput" label="Password" value={password} type="password" size="small" fullWidth
                        onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" variant="contained" color="primary" size="small" sx={{ width: '12em', alignSelf: 'center' }}>Login</Button>
            </Stack>
        </Box>
        </Paper>
        <Snackbar open={status !== ''} autoHideDuration={5000}
            onClose={handleAlertClose}>
            <Alert onClose={handleAlertClose} severity={status} sx={{ width: '100%'}}>
                <AlertTitle>Login failed</AlertTitle>
                {statusMessage}</Alert>
        </Snackbar>
      </>
    );
}

export default LoginForm;
