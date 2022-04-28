import React from "react";
import { Card, CardContent, CardMedia, Grid, Rating, Stack, Typography } from "@mui/material";
import MovieImageUnavailable from "../img/movieimageunavailable.svg";

function Movie({movie}) {
    console.log("movie", movie);
    return (
        <Grid item xs={12}>
        <Card elevation={3} sx={{ margin: '0 0 1em 0' }}>
            <Stack direction='row'>
            {/* <CardMedia image={movie.imageUrl} title={movie.title} /> */}
            <CardMedia component="img" src={(movie.imageUrl) ? movie.imageUrl : MovieImageUnavailable} title={movie.title} sx={{ height: "11.9em", width: "7.7em" }} />
            <CardContent>
                <Typography variant="h6">
                    {movie.title} ({movie.year})
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                    {movie.genres === undefined ? "-" : movie.genres.map(g => g.name).join(", ")}
                </Typography>
                <Stack direction='row'>
                    <Rating name="read-only" defaultValue={movie.rank} readOnly max={10} />
                    <Typography variant="body" sx={{ fontWeight: 'bold', marginLeft: '0.5em' }}>{movie.rank}</Typography>
                </Stack>
                <Typography variant="body2" >
                    {movie.description}
                </Typography>
            </CardContent>
            </Stack>
        </Card>
        </Grid>
    );
}

export default Movie;

// private String title;
// private String description;
// private Integer year;
// private String imageUrl;
// private Integer rank;
// private boolean watched;