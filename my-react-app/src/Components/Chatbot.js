import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/chatbot', {
        user_input: userInput,
      });
      setChatResponse(response.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5">Medical Chatbot</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Ask me anything..."
          fullWidth
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Send
        </Button>
      </form>
      {chatResponse && (
        <Paper sx={{ p: 2, mt: 2 }}>
          <Typography variant="body1"><strong>Chatbot:</strong> {chatResponse}</Typography>
        </Paper>
      )}
    </Box>
  );
}

export default Chatbot;
