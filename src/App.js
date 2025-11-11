import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import HomePage from './pages/HomePage';
import ComponentsPage from './pages/ComponentsPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React UI Components Demo
          </Typography>
        </Toolbar>
      </AppBar>
      <Navigation />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;