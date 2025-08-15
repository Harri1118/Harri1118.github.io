// // src/App.js
import React, { useEffect, useState } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography, styled } from '@mui/material';
import { Button } from 'react-scroll';
import PlayGame from './PlayGame'
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
const Menu = () =>{
  const navigate = useNavigate()
  return (
    <div>
      <Typography variant="h3" component="h2" data-aos="fade-in" justify-content="center" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>
        Title
      </Typography>
      <Button onClick="">Play</Button>
      <Button>Rules</Button>
      <Button>Options</Button>
      <Button onClick={() => navigate('/')}>Return to home page</Button>
    </div>
    
  );
}

export default Menu;