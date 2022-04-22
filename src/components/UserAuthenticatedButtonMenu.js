import React, { useContext, useState } from "react";
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Stack, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../nav/context";

function UserAuthenticatedButtonMenu() {
    let auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleUserButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        setAnchorEl(null);
        auth.logout();
        navigate("/");
    }

    const handleProfileClick = () => {
        setAnchorEl(null);
        navigate("/user");
    }

    const handleNewListClick = () => {
        setAnchorEl(null);
        navigate("/new-list");
    }

    return (
        <>
        <IconButton onClick={handleUserButtonClick} sx={{ marginLeft: '0.5em' }} >
            <Avatar src={auth.userData.imageUrl} alt={auth.userData.name} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}
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
                <MenuItem onClick={handleProfileClick}>
                    <Stack spacing={0} direction="column"
                        alignItems="center">
                        <Avatar src={auth.userData.imageUrl} alt={auth.userData.name}
                            imgProps={{ width: "80px", heigth: "80px" }} />
                        <Typography>
                            {auth.userData.name}
                        </Typography>
                        <Typography>
                            {auth.userData.email}
                        </Typography>
                    </Stack>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleProfileClick}>
                    <ListItemIcon>
                        <FormatListBulletedIcon />
                    </ListItemIcon>
                    My Lists
                </MenuItem>
                <MenuItem onClick={handleNewListClick}>
                    <ListItemIcon>
                        <AddCircleOutlineIcon />
                    </ListItemIcon>
                    New List
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogoutClick}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    Logout
                </MenuItem>
        </Menu>
        </>
    );
}

export default UserAuthenticatedButtonMenu;
