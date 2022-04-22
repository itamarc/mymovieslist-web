import React from 'react';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { useNavigate } from "react-router-dom";

import Menu from './Menu';
import MMLLogo from '../img/mml-logo.svg';

function Header() {
const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar>
                    <Button key="home" variant="text" onClick={handleLogoClick}
                            sx={{
                                color: 'white',
                                flexGrow: 0,
                                textTransform: 'capitalize',
                                fontSize: '1.5em'
                            }}><img src={MMLLogo} alt="My Movies List" id="MML_Logo" />
                            &nbsp;&nbsp;&nbsp;My Movies List</Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ flexGrow: 0 }}>
                        <Menu />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
