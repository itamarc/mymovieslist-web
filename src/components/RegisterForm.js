import React, { useContext, useState } from 'react';
import { Alert, Box, Button, Paper, Snackbar, Stack, TextField } from '@mui/material';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../nav/context';

function RegisterForm() {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [status, setStatus] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== passwordConfirmation) {
            setStatus('error');
            setStatusMessage('Passwords do not match!');
            return;
        }

        AuthService.register(name, email, password)
            .then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setPasswordConfirmation('');
                AuthService.getCurrentUser()
                    .then((user) => {
                        auth.login(user);
                    });
                setStatus('success');
                setStatusMessage('Registration successful!');
                navigate("/user");
            }).catch(error => {
                console.log("error:", error);
                setStatus('error');
                setStatusMessage((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
        console.log("name:", name);
        console.log("email:", email);
        console.log("password:", password);
        console.log("passwordConfirmation:", passwordConfirmation);
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
                <TextField autoFocus={true} id="nameInput" label="Name" value={name} size="small" fullWidth
                        onChange={(e) => setName(e.target.value)} />
                <TextField id="emailInput" label="Email" value={email} type="email" size="small" fullWidth
                        onChange={(e) => setEmail(e.target.value)} />
                <TextField id="passwordInput" label="Password" value={password} type="password" size="small" fullWidth
                        onChange={(e) => setPassword(e.target.value)} />
                <TextField id="passwordConfirmationInput" label="Confirm Password" value={passwordConfirmation} type="password" size="small" fullWidth
                        onChange={(e) => setPasswordConfirmation(e.target.value)} />
                <Button type="submit" variant="contained" color="primary" size="small" sx={{ width: '12em', alignSelf: 'center' }}>Register</Button>
            </Stack>
        </Box>
        </Paper>
        <Snackbar open={status !== ''} autoHideDuration={6000}
            onClose={handleAlertClose}>
            <Alert onClose={handleAlertClose} severity={status} sx={{ width: '100%'}}>
                {statusMessage}</Alert>
        </Snackbar>
        </>
    );
}

export default RegisterForm;
