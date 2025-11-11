import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={currentPath} aria-label="navigation tabs">
        <Tab 
          label="Home" 
          value="/" 
          component={Link} 
          to="/" 
        />
        <Tab 
          label="Components" 
          value="/components" 
          component={Link} 
          to="/components" 
        />
      </Tabs>
    </Box>
  );
}

export default Navigation;