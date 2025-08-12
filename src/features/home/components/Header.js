import React, { useEffect, useState } from 'react';
import { Typography, Box, IconButton, Link, useMediaQuery } from '@mui/material';
import AOS from 'aos';
import 'assets/styles/Header.css';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import ImageSlider from 'components/ImageSlider'
import SequentialAnimation from 'components/SequentialAnimation';

function Header() {
  const isMobile = useMediaQuery('(max-width:768px)');

  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
    { !isMobile &&
      <Box
      component="header"
      data-aos="fade-up"
      className="header"
      sx={{ textAlign: 'center', padding: '2rem', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}
    >
<TypeAnimation
  sequence={[
    'Welcome',
    1000,
  ]}
  wrapper="h1" // Wraps the animation in an h1 element
  speed={50}
  style={{ display: 'inline-block', fontSize: '6rem', fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4' }} // Changed to Roboto
  repeat={0}
  data-aos="fade-up"
/>  
      <ImageSlider  />
      <Box id="header" paddingTop={10} height="100px"/>
      <Typography variant="h2" component="h2" data-aos="fade-up"
      style={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}
      >
        Goal
      </Typography>
      <SequentialAnimation/>
    </Box>
  }
  {isMobile && (
  <Box
    component="header"
    data-aos="fade-up"
    className="header"
    sx={{
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: "block", // Changes display to block to stack elements vertically
      justifyContent: "center", 
      alignItems: "center"
    }}
  >
    <TypeAnimation
      sequence={['Welcome', 1000]}
      wrapper="h1"
      speed={50}
      style={{
        fontSize: '13vw', // Default for small devices
        fontFamily: 'Bruno Ace SC, serif',
        fontStyle: 'normal',
        color: '#7BAFD4',
        textAlign: 'center',
        width: '100%',
        display: 'block' // Ensure TypeAnimation takes up full width and is block-level
      }}
      repeat={0}
      data-aos="fade-up"
    />

  <ImageSlider  />
    <Typography
      variant="h2"
      component="h2"
      data-aos="fade-up"
      style={{
        fontSize: '13vw',
        fontFamily: 'Bruno Ace SC, serif',
        fontStyle: 'normal',
        color: '#7BAFD4',
        marginTop: '20px', // Adds some spacing between elements if needed
      }}
    >
      Goal
    </Typography>

    <SequentialAnimation />
  </Box>
)}

</div>
  );
}

export default Header;