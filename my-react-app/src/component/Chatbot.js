import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

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
    <Box>
      <Paper>
        <Typography variant="h4">Medical Chatbot</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Ask me anything..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
        {chatResponse && <Typography variant="h6">Response: {chatResponse}</Typography>}
        {error && <Typography color="error">{error}</Typography>}
      </Paper>
    </Box>
  );
};

export default Chatbot;
