import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Toolbar } from '@mui/material';
import SearchForm from './SearchForm';

function Menu() {
    const navigate = useNavigate()


    return (
        <Box>
            <Toolbar>
                <SearchForm />
                <AccountCircleIcon onClick={() => navigate('/login')} sx={{ marginLeft: '0.5em' }} />
            </Toolbar>
        </Box>
    );
}

export default Menu;
