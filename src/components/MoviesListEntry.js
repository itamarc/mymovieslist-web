import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Stack, Typography } from "@mui/material";

import { AuthContext } from '../nav/context';

function MoviesListEntry({user,moviesList}) {
    const auth = useContext(AuthContext);

    if (typeof user === "undefined") {
        user = moviesList.user;
    }
    return (
        <Grid item xs={5.5}>
        <Paper elevation={3}>
            <Typography margin='0.5em 1em 0em 1em'>
                Title: <Link to={"/movies-lists/"+moviesList.id}><strong>{moviesList.title}</strong></Link>
            </Typography>
            <Typography margin='0em 1em 0em 1em'>
                User: { (auth.authenticated) ? <Link to={"/user/"+user.id}><strong>{user.name}</strong></Link> : <strong>{user.name}</strong>}
            </Typography>
            <Stack direction='row' justifyContent="space-between" margin='0em 1em 0em 1em'>
                <Typography variant="caption">
                    Movies:<br/>{moviesList.moviesCount}
                </Typography>
                <Typography variant="caption">
                    Created:<br/>{new Date(moviesList.created).toLocaleString()}
                </Typography>
                <Typography variant="caption">
                    Last Updated:<br/>{new Date(moviesList.updated).toLocaleString()}
                </Typography>
            </Stack>
        </Paper>
        </Grid>
    );
}

export default MoviesListEntry;
