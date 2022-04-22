import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Button sx={{
                        color: 'white',
                        textTransform: 'capitalize',
                        fontWeight: 'normal'
                        }} key="terms" variant="text" href="/terms">Terms</Button>
                    <Button sx={{
                        color: 'white',
                        textTransform: 'capitalize',
                        fontWeight: 'normal'
                        }} key="privacy" variant="text" href="/privacy">Privacy</Button>
                    <Button sx={{
                        color: 'white',
                        textTransform: 'capitalize',
                        fontWeight: 'normal'
                        }} key="about" variant="text" href="/about">About</Button>
                    <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ flexGrow: 0, fontSize: 'small' }} align="right">My Movies List is a <Link to="/about">portfolio project</Link><br/>
            created by <a href="https://github.com/itamarc">itamarc</a></Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Footer;
