import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">About Medic App</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Medic App is designed to provide users with quick and reliable medical information through an interactive chatbot interface. Our goal is to help users get answers to their medical questions promptly.
      </Typography>
    </Box>
  );
}

export default About;
