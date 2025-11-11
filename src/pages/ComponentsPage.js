import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import DataTable from '../components/DataTable';

const sampleData = [
  { id: 1, name: 'Project Alpha', status: 'Active', date: '2024-01-15' },
  { id: 2, name: 'Project Beta', status: 'Inactive', date: '2024-01-10' },
  { id: 3, name: 'Project Gamma', status: 'Active', date: '2024-01-20' },
  { id: 4, name: 'Project Delta', status: 'Active', date: '2024-01-25' }
];

function ComponentsPage() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        UI Components Showcase
      </Typography>
      
      <Typography variant="body1" paragraph>
        This page demonstrates various Material-UI components integrated 
        into our React application.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" component="h2" gutterBottom>
        Data Table Component
      </Typography>
      
      <DataTable data={sampleData} />
    </Box>
  );
}

export default ComponentsPage;