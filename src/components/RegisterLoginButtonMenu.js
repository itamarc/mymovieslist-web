import React, { useState } from "react";
import { Button, IconButton, Menu, Stack } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

function RegisterLoginButtonMenu() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleAccountButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoginClick = () => {
        setAnchorEl(null);
        navigate("/login");
    };

    const handleRegisterClick = () => {
        setAnchorEl(null);
        navigate("/register");
    };

    return (
        <>
        <IconButton onClick={handleAccountButtonClick} sx={{ marginLeft: '0.5em' }} >
            <AccountCircleIcon sx={{ color: 'white', fontSize: 40 }} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open}
            onClose={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Stack spacing={2} direction="column" margin='1em'
                    alignSelf="center">
                    <Button variant="contained" onClick={handleLoginClick}>Login</Button>
                    <Button variant="contained" onClick={handleRegisterClick}>Register</Button>
                </Stack>
        </Menu>
        </>
    );
}

export default RegisterLoginButtonMenu;
