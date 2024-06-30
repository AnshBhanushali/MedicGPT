import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Contact Us</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          fullWidth
          required
          sx={{ mt: 2 }}
        />
        <TextField
          label="Your Email"
          type="email"
          fullWidth
          required
          sx={{ mt: 2 }}
        />
        <TextField
          label="Your Message"
          multiline
          rows={4}
          fullWidth
          required
          sx={{ mt: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Send
        </Button>
      </form>
    </Box>
  );
}

export default Contact;
