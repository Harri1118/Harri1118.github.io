// // src/App.js
import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//import CssBaseline from '@mui/material/CssBaseline';
import { Box, styled } from '@mui/material';
//import Menu from './windows/Menu'
//import PlayGame from './windows/PlayGame'

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
  //backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg)',
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
    //fontFamily: 'url(https://www.fontspace.https://see.fontimg.com/api/rf5/YzxE8/MTMwNGU5OGRhMDViNGMyMmFlYzYyMjEzZTYwOTZiY2EudHRm/V2VsY29tZQ/robot-9000-italic.png?r=fs&h=65&w=1000&fg=000000&bg=FFFFFF&tb=1&s=65)',
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
}));


const Game = () =>{
  let mode = 'play'
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <CssBaseline />
      <BackgroundBox>
        {
          mode == "menu" &&
            <Menu/>
        }
        {
          mode =="play" &&
            <PlayGame/>
        }
      </BackgroundBox>
      <Box sx={{ m: 10 }} /> 
     <ParticlesBackGround/> */}
    </ThemeProvider>
  );
}

export default Game;