import React from 'react';
import { Box, Toolbar } from '@mui/material';
import SearchForm from './SearchForm';
import UserButton from './UserButton';

function Menu() {

    return (
        <Box>
            <Toolbar>
                <SearchForm />
                <UserButton />
            </Toolbar>
        </Box>
    );
}

export default Menu;
