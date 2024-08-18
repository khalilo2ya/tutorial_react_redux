import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box
            sx={{
                py: 4,
                px: 2,
                mt: 5,
                backgroundColor: '#1976d2',
                color: 'white',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2">
                            We are a team dedicated to providing the best web development services.
                            Our mission is to create high-quality, user-friendly websites that help businesses grow.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box>
                            <Link href="/" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                                Home
                            </Link>
                            <Link href="/about" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                                About
                            </Link>
                            <Link href="/services" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                                Services
                            </Link>
                            <Link href="/contact" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                                Contact
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center'  }}>
                            <IconButton aria-label="Facebook" sx={{ color: 'white' }} href="#">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="Twitter" sx={{ color: 'white' }} href="#">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton aria-label="LinkedIn" sx={{ color: 'white' }} href="#">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton aria-label="Instagram" sx={{ color: 'white' }} href="#">
                                <InstagramIcon />
                            </IconButton>
                        </Box>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            &copy; {new Date().getFullYear()} ayaKode - Khalil Yahyaoui. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
