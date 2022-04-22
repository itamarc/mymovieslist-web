import React, { useState } from "react";
import { Button, Dialog, DialogTitle, IconButton, Stack } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

function RegisterLoginDialog() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleAccountButtonClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleLoginClick = () => {
        setOpen(false);
        navigate("/login");
    };
    
    const handleRegisterClick = () => {
        setOpen(false);
        navigate("/register");
    };

    return (
        <>
        <IconButton onClick={handleAccountButtonClick} sx={{ marginLeft: '0.5em' }} >
            <AccountCircleIcon sx={{ color: 'white' }} />
        </IconButton>
        <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='xs' sx={{
            position: 'absolute', top: '4em', right: '1em'}}>
                <AccountCircleIcon color={"primary"} sx={{
                    alignSelf: "center",
                    fontSize: 40,
                    marginTop: '0.5em' }} />
                <Stack spacing={2} direction="column" maxWidth='50%' margin='1em'
                    alignSelf="center">
                    <Button variant="contained" onClick={handleLoginClick}>Login</Button>
                    <Button variant="contained" onClick={handleRegisterClick}>Register</Button>
                </Stack>
        </Dialog>
        </>
    );
}

export default RegisterLoginDialog;
