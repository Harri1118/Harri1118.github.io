// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, styled } from '@mui/material';
import './App.css'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const BackgroundBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  fontFamily: 'Ring of Kerry',
  minHeight: '100vh',
  backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
}));

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BackgroundBox>
        <Header />
        <MainContent />
        <Footer />
      </BackgroundBox>
      <Box sx={{ m: 10 }} />
    </ThemeProvider>
  );
}

export default App;