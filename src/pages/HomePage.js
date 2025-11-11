import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import UserCard from '../components/UserCard';

const sampleUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager' }
];

function HomePage() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to React UI Components Demo
      </Typography>
      
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Project Overview
        </Typography>
        <Typography variant="body1">
          This application demonstrates the integration of Material-UI components 
          in a React application. It showcases various UI components including 
          cards, tables, navigation, and forms.
        </Typography>
      </Paper>

      <Typography variant="h5" component="h2" gutterBottom>
        Team Members
      </Typography>
      
      <Grid container spacing={2}>
        {sampleUsers.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HomePage;