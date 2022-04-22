import React from "react";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    const handleTermsClick = () => {
        navigate("/terms");
    };

    const handlePrivacyClick = () => {
        navigate("/privacy");
    };

    const handleAboutClick = () => {
        navigate("/about");
    };

    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Button sx={{
                        color: 'white',
                        textTransform: 'capitalize',
                        fontWeight: 'normal'
                        }} key="terms" variant="text" onClick={handleTermsClick}>Terms</Button>
                    <Button sx={{
                        color: 'white',
                        textTransform: 'capitalize',
                        fontWeight: 'normal'
                        }} key="privacy" variant="text" onClick={handlePrivacyClick}>Privacy</Button>
                    <Button sx={{
                        color: 'white',
                        textTransform: 'capitalize',
                        fontWeight: 'normal'
                        }} key="about" variant="text" onClick={handleAboutClick}>About</Button>
                    <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ flexGrow: 0, fontSize: 'small' }} align="right">My Movies List is a <Link to="/about">portfolio project</Link><br/>
            created by <a href="https://github.com/itamarc" target="_blank">itamarc</a></Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Footer;
