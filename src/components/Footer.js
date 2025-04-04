// src/components/Header.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import '../App.css'
import 'aos/dist/aos.css';
import { Typography, Box, Link, useMediaQuery } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

import { Grid2 } from '@mui/material';

function Footer() {
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="footer" >
    {!isMobile &&
      
      <div>
    <Box paddingTop="100px"/>

          <Typography  variant="h3" component="h3" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', marginBottom: '20px', textAlign: 'center'}}>
            Contact Me
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
        color="#7BAFD4"
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          }
        }}
      >
        <GitHubIcon fontSize="large"/>
      </Link>

      <Link 
        href="https://www.linkedin.com/in/harrison-mckenna-908104224/" 
        target="_blank" 
        rel="noopener noreferrer" 
        color="#7BAFD4"
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          }
        }}
      >
        <LinkedInIcon fontSize="large" />
      </Link>

      <Link 
        href="https://www.youtube.com/@Harrisonkm20202" 
        target="_blank" 
        rel="noopener noreferrer" 
        color="#7BAFD4"
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          }
        }}
      >
        <YouTubeIcon fontSize="large" />
      </Link>
      <Link 
        href="mailto:hkmckenna@albany.edu" 
        target="_blank" 
        rel="noopener noreferrer" 
        color="#7BAFD4"
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          }
        }}
      >
        <EmailIcon fontSize="large" />
      </Link>
    </Box>
    <Box paddingTop="200px"/>
        </div>
    }
    {isMobile &&
              <div>
              <Typography  variant="h3" component="h3" sx={{fontSize: '10vw', fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', marginBottom: '20px', textAlign: "center"}}>
                Contact Me
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
        color="#7BAFD4"
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          }
        }}
      >
        <GitHubIcon fontSize="medium"/>
      </Link>

      <Link 
        href="https://www.linkedin.com/in/harrison-mckenna-908104224/" 
        target="_blank" 
        rel="noopener noreferrer" 
        color="#7BAFD4"
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          }
        }}
      >
        <LinkedInIcon fontSize="medium" />
      </Link>

      <Link 
        href="https://www.youtube.com/@Harrisonkm20202" 
        target="_blank" 
        rel="noopener noreferrer" 
        color="#7BAFD4"
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          }
        }}
      >
        <YouTubeIcon fontSize="medium" />
      </Link>
      <Link 
        href="mailto:hkmckenna@albany.edu" 
        target="_blank" 
        rel="noopener noreferrer" 
        color="#7BAFD4"
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          }
        }}
      >
        <EmailIcon fontSize="medium" />
      </Link>
    </Box>
    <Box paddingTop="100px"/>
              </div>
    }
  </div>
  );
  
}

export default Footer;