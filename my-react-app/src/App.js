import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Header />
      <Container component="main" sx={{ mt: 8, mb: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
