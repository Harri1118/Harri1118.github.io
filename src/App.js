// // // src/App.js
// import React, { useEffect, useState } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { Box, styled } from '@mui/material';
// import ParticlesBackGround from './elements/ParticlesBackground';
// import './App.css'

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
//   typography: {
//     //fontFamily: "'Roboto', sans-serif", // Use the font you want
//   },
// });

// const BackgroundBox = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   minHeight: '100vh',
//   //backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg)',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     //fontFamily: 'url(https://www.fontspace.https://see.fontimg.com/api/rf5/YzxE8/MTMwNGU5OGRhMDViNGMyMmFlYzYyMjEzZTYwOTZiY2EudHRm/V2VsY29tZQ/robot-9000-italic.png?r=fs&h=65&w=1000&fg=000000&bg=FFFFFF&tb=1&s=65)',
//     //backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     zIndex: 1,
//   },
//   '& > *': {
//     position: 'relative',
//     zIndex: 2,
//   },
// }));


// const App = () =>{

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <Navbar/>
//       <BackgroundBox>
//         <Header/>
//         <MainContent/>
//         <Footer />
//       </BackgroundBox>
//       <Box sx={{ m: 10 }} /> 
//      <ParticlesBackGround/>
//     </ThemeProvider>
//   );
// }

// export default App;

// // src/App.js
import React, { useEffect, useState } from 'react';
import Home from './Home';
import Game from './game/Game'
import { Route, Routes } from "react-router-dom";
const App = () =>{

  return (
    <>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gm" element={<Game/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;