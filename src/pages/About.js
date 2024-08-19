import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
       <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
      <Box sx={{ textAlign: 'left', marginBottom: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          About the Project
        </Typography>
        <Typography variant="body1" paragraph>
          This project is a tutorial on how to manage CRUD operations for users using React, Redux, and JSON Server. The application allows you to create, read, update, and delete user information through a simple interface.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Key Features
        </Typography>
        <ul>
          <li><Typography variant="body1">User Management: Add, edit, delete, and view user details.</Typography></li>
          <li><Typography variant="body1">State Management: Utilizes Redux for managing the global state of the application.</Typography></li>
          <li><Typography variant="body1">API Integration: Uses Axios to interact with a mock backend provided by JSON Server.</Typography></li>
          <li><Typography variant="body1">Material UI: Implements Material UI components for a responsive and modern user interface.</Typography></li>
        </ul>
        <Typography variant="h6" gutterBottom>
          Technologies Used
        </Typography>
        <ul>
          <li><Typography variant="body1">React: A JavaScript library for building user interfaces.</Typography></li>
          <li><Typography variant="body1">Redux: A state management library for JavaScript applications.</Typography></li>
          <li><Typography variant="body1">Redux Thunk: Middleware for handling asynchronous operations in Redux.</Typography></li>
          <li><Typography variant="body1">Axios: A promise-based HTTP client for making requests to the backend.</Typography></li>
          <li><Typography variant="body1">Material UI: A popular React UI framework with pre-built components.</Typography></li>
          <li><Typography variant="body1">JSON Server: A tool for creating a fake REST API to serve as a backend.</Typography></li>
        </ul>
        <Typography variant="body1" paragraph>
          The project is designed to provide a simple yet comprehensive example of how to build a full-featured CRUD application with React and Redux.
        </Typography>
      </Box>
      </Paper>
    </Container>
  );
};

export default About;
