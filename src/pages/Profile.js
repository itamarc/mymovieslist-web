import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import User from "../components/User";
import MovieListEntry from "../components/MoviesListEntry";
import { AuthContext } from "../nav/context";
import UserService from "../services/UserService";
import AuthService from "../services/AuthService";


function Profile() {
    const params = useParams();
    let auth = useContext(AuthContext);
    let userId = getUserId(params, auth);
    const [userAndLists, setUserAndLists] = useState({});
    const [moviesLists, setMoviesLists] = useState([]);

    useEffect(() => {
        if (userId) {
        UserService.getUserWithMoviesLists(userId)
            .then(user => {
                setUserAndLists(user);
                setMoviesLists(user.moviesLists);
            }).catch(error => {
                console.error(error);
            });
        }
    }, [userId]);

    return (
        <Box marginBottom='1em'>
            <User userId={userId}/>
            <Typography variant="h5" marginTop='1em'>Movies Lists</Typography>
            <Grid container spacing={1} justifyContent="space-between">
            { moviesLists.map(moviesList => (
            <MovieListEntry key={moviesList.id}
                user={userAndLists}
                moviesList={moviesList}
            />
            ))}
            </Grid>
        </Box>
    );
}

function getUserId(params, auth) {
    if (params.userId) {
        return params.userId;
    } else if (auth?.userData?.id) {
        return auth.userData.id;
    } else {
        AuthService.getCurrentUser()
            .then((user) => {
                auth.login(user);
                return user.id;
            }).catch(error => {
                console.error(error);
                auth.logout();
                return null;
            });
    }
}

export default Profile;
