import React from 'react';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  Avatar,
  Box 
} from '@mui/material';
import { Person } from '@mui/icons-material';

function UserCard({ user }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar sx={{ mr: 2 }}>
            <Person />
          </Avatar>
          <Typography variant="h6" component="div">
            {user.name}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.role}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          View Profile
        </Button>
        <Button size="small" variant="outlined">
          Contact
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserCard;