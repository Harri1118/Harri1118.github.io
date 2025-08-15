// // src/App.js
import React, { useEffect, useState } from 'react';
import Header from 'features/home/components/Header';
import Footer from 'components/Footer';
import Navbar from 'features/home/components/Navbar';
import MainContent from 'features/home/components/MainContent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, styled } from '@mui/material';
import ParticlesBackGround from 'components/ParticlesBackground';
import AOS from 'aos';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    //fontFamily: "'Roboto', sans-serif", // Use the font you want
  },
});

const BackgroundBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
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
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
}));


const Home = () =>{
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar/>
      <BackgroundBox>
        <Header/>
        <MainContent/>
        <Footer/>
      </BackgroundBox>
      <Box sx={{ m: 10 }} /> 
     <ParticlesBackGround/>
    </ThemeProvider>
  );
}

export default Home;