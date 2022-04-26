import { Avatar, Paper, Stack, Typography } from '@mui/material';
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from "../nav/context";
import UserService from "../services/UserService";

function User() {
    const params = useParams();
    const auth = useContext(AuthContext);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        let user = getUserData(params.userId, auth);
        if (user instanceof Promise) {
            user.then(user => setUserData(user));
        } else {
            setUserData(user);
        }
    }, [params, auth]);

    return (
        <Paper sx={{ marginTop: '1em' }} elevation={3}>
            <Stack direction="row" spacing={1} padding={2}>
                    <Avatar id="avatar" src={userData.imageUrl} alt={userData.name}/>
                    <Stack spacing={1}>
                        <Typography>User: {userData.name}</Typography>
                        <Typography>E-mail: {userData.email}</Typography>
                    </Stack>
            </Stack>
        </Paper>
    );
}

function getUserData(userId, auth) {
    if (typeof userId === "undefined" &&
        typeof auth !== "undefined" && typeof auth.userData !== "undefined") {
        return auth.userData;
    } else if (typeof auth !== "undefined" && typeof auth.userData !== "undefined"
        && typeof auth.userData.id !== "undefined" && auth.userData.id === userId) {
        return auth.userData;
    } else {
        return UserService.getUserWithMoviesLists(parseInt(userId))
            .then(user => {
                return user;
            });
    }
}

export default User;
