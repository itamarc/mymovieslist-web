import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import React from 'react';

import Menu from './Menu';
import MMLLogo from '../img/mml-logo.svg';

function Header() {
    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar>
                    <Button key="home" variant="text" href="/"
                            sx={{
                                color: 'white',
                                flexGrow: 0,
                                textTransform: 'capitalize'
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
