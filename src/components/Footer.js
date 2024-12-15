// src/components/Header.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typography, Box, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

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
      <Typography 
        variant="h3" 
        component="h2" 
        data-aos="fade-up" 
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        Socials
      </Typography>
  
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          paddingTop: "5%", 
          gap: 10  // Add space between icons
        }}
      >
        <Link 
          href="https://github.com/Harri1118" 
          target="_blank" 
          rel="noopener noreferrer" 
          color="#fff"
          sx={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }
          }}
        >
          <GitHubIcon fontSize="large" data-aos="fade-in"/>
        </Link>
  
        <Link 
          href="https://www.linkedin.com/in/harrison-mckenna-908104224/" 
          target="_blank" 
          rel="noopener noreferrer" 
          color="#fff"
          sx={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }
          }}
        >
          <LinkedInIcon fontSize="large" data-aos="fade-in"/>
        </Link>
  
        <Link 
          href="https://www.linkedin.com/in/harrison-mckenna-908104224/" 
          target="_blank" 
          rel="noopener noreferrer" 
          color="#fff"
          sx={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }
          }}
        >
          <YouTubeIcon fontSize="large" data-aos="fade-in"/>
        </Link>
        <Link 
          href="https://www.linkedin.com/in/harrison-mckenna-908104224/" 
          target="_blank" 
          rel="noopener noreferrer" 
          color="#fff"
          sx={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }
          }}
        >
          <EmailIcon fontSize="large" data-aos="fade-in"/>
        </Link>
      </Box>
    </Box>
  );
  
}

export default Footer;