import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

function Menu() {
    const navigate = useNavigate()
    return (
        <Box>
            <SearchIcon onClick={() => navigate('/search')} />
            <AccountCircleIcon onClick={() => navigate('/login')} sx={{ marginLeft: '0.5em' }} />
        </Box>
    );
}

export default Menu;
