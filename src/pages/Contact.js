import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Contact Information
        </Typography>
        <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h6" gutterBottom>
            Khalil Yahyaoui
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <PersonIcon sx={{ marginRight: '0.5rem' }} />
            Fullstack Developer with over 10 years of experience
          </Typography>
        </Box>
        <List>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Email" secondary="khalilo2y@gmail.com" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="Phone" secondary="0021629401131" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Location" secondary="Gafsa, Tunisia" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Company" secondary="ayaKode" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default Contact;
