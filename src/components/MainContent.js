// src/components/MainContent.js
import React, { useEffect } from 'react';
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import Skills from './Skills'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Typography, Box, useMediaQuery} from '@mui/material'
function MainContent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div className="main-content">
      {!isMobile &&
            <Box
            component="header"
            data-aos="fade-up"
            className="header"
            sx={{ textAlign: 'center', padding: '2rem' }}
          >
            <Box id="projects" paddingTop={10} height="160px"/>
            <Typography  variant="h3" component="h2" data-aos="fade-in" justify-content="center" style={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', paddingBottom: "5%"}}>
              Projects
            </Typography>
            <Projects/>
            <Box id="work-experience" paddingTop={10} height="160px"/>
            <Typography variant="h3" component="h2" data-aos="fade-in" justify-content="center" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', paddingBottom: "5%"}}>
              Work Experience
            </Typography>
            <WorkExperience/>
            <Box id="skills" paddingTop={10} height="150px"/>
            <Typography  variant="h3" component="h3" data-aos="fade-up" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', marginBottom: '20px', paddingBottom: "5%"}}>
              Skills
            </Typography>
            <Skills sx={{marginBottom: '20px'}}/>
          </Box>
      } 
      {isMobile &&
            <Box
            component="header"
            data-aos="fade-up"
            className="header"
            sx={{ textAlign: 'center', padding: '2rem' }}
          >
            <Box id="projects" paddingTop={10} height="160px"/>
            <Typography  variant="h3" component="h2" data-aos="fade-in" justify-content="center" style={{fontSize: '13vw', fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', paddingBottom: "5%"}}>
              Projects
            </Typography>
            <Projects/>
            <Box id="work-experience" paddingTop={10} height="160px"/>
            <Typography variant="h3" component="h2" data-aos="fade-in" justify-content="center" sx={{fontSize: '13vw', fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', paddingBottom: "5%"}}>
              Work Experience
            </Typography>
            <WorkExperience/>
            <Box id="skills" paddingTop={10} height="150px"/>
            <Typography  variant="h3" component="h3" data-aos="fade-up" sx={{fontSize: '13vw', fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', marginBottom: '20px', paddingBottom: "5%"}}>
              Skills
            </Typography>
            <Skills sx={{marginBottom: '20px'}}/>
          </Box>
      }
    </div>
  );
}

export default MainContent;