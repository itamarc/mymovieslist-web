import React from 'react';
import { Box, Toolbar } from '@mui/material';
import SearchForm from './SearchForm';
import RegisterLoginButton from './RegisterLoginButton';

function Menu() {

    return (
        <Box>
            <Toolbar>
                <SearchForm />
                <RegisterLoginButton />
            </Toolbar>
        </Box>
    );
}

export default Menu;
