import React, { useEffect, useState } from 'react';
import { Typography, Box, IconButton, Link } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import AOS from 'aos';
import '../css/Header.css';
import 'aos/dist/aos.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ImageSlider from '../elements/ImageSlider'

function Header() {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <Box
      component="header"
      data-aos="fade-up"
      className="header"
      sx={{ textAlign: 'center', padding: '2rem' }}
    >
      <Typography variant="h1" component="h2" data-aos="fade-in" fontFamily={"Ring of Kerry, sans-serif"}>
        Welcome
      </Typography>
      <ImageSlider/>
      <Typography variant="h2" component="h2" data-aos="fade-in">
        Goal
      </Typography>
      <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
        <Typography variant="body1" data-aos="fade-in">
          I'm a passionate developer with a keen interest in creating dynamic,
          user-friendly web applications. With expertise in React.js and other
          modern technologies, I enjoy solving complex problems and delivering
          impactful solutions.
        </Typography>
        <br/>
        <Link href="https://www.overleaf.com/project/66fb66249304752bb0d0559a" target="_blank" color="#fff">Check out my resume!</Link>
      </Box>
      
    </Box>
  );
}

export default Header;