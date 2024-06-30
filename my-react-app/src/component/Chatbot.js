import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Paper, Container, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '600px',
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#ffffff',
  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
}));

const ChatbotAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
}));

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:4000/api/chatbot', { user_input: userInput });
      setChatResponse(response.data.response);
    } catch (err) {
      if (err.response && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('An error occurred while sending your message.');
      }
    }
  };

  return (
    <BackgroundBox>
      <StyledPaper elevation={6}>
        <ChatbotAvatar>
          <Typography variant="h3" color="white">
            M
          </Typography>
        </ChatbotAvatar>
        <Typography variant="h4" gutterBottom>
          Medical Chatbot
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Ask me anything..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
        {chatResponse && (
          <Typography variant="h6" color="textSecondary" style={{ marginTop: '20px' }}>
            <strong>Response:</strong> {chatResponse}
          </Typography>
        )}
        {error && (
          <Typography color="error" style={{ marginTop: '20px' }}>
            {error}
          </Typography>
        )}
      </StyledPaper>
    </BackgroundBox>
  );
};

export default Chatbot;
