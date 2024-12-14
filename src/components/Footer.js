// src/components/Header.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typography, Box, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (


    <Box 
      container
      spacing={20}
      sx={{ minHeight: '40vh', width: '100vh' }}
      width="100%"   
      paddingTop="1%"
      data-aos="fade-up" 
       
      >
        <Typography variant="h3" component="h2" data-aos="fade-up" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Socials
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "5%" } }>
        <Link href="https://github.com/Harri1118" target="_blank" rel="noopener noreferrer" color="#fff">
            <GitHubIcon fontSize="large" data-aos="fade-in"/>
            github.com/Harri1118
        </Link>
        <Box sx={{ m: 10 }} />
        <Link href="https://www.linkedin.com/in/harrison-mckenna-908104224/" target="_blank" rel="noopener noreferrer" color="#fff">
            <LinkedInIcon data-aos="fade-in" fontSize="large"/>
            linkedin.com/harrison-mckenna-908104224
        </Link>
        </Box>
    </Box>
  
  );
}

export default Footer;