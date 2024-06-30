import React from 'react';
import { Box, Typography, Paper, Container, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://source.unsplash.com/featured/?healthcare)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '800px',
  width: '100%',
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
}));

const AboutAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
}));

const About = () => {
  return (
    <BackgroundBox>
      <StyledPaper elevation={6}>
        <Typography variant="h3" gutterBottom>
          About Medic App
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Medic App is designed to provide users with quick and reliable medical information through an interactive chatbot interface. Our goal is to help users get answers to their medical questions promptly.
        </Typography>
      </StyledPaper>
    </BackgroundBox>
  );
};

export default About;
