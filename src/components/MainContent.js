// src/components/MainContent.js
import React, { useEffect } from 'react';
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import Skills from './Skills'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Typography, Box} from '@mui/material'
function MainContent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="main-content">
    <Box
      component="header"
      data-aos="fade-up"
      className="header"
      sx={{ textAlign: 'center', padding: '2rem' }}
    >
      <Box id="projects" paddingTop={10} height="160px"/>
      <Typography  variant="h3" component="h2" data-aos="fade-in" justify-content="center">
        Projects
      </Typography>
      <Projects/>
      <Box id="work-experience" paddingTop={10} height="160px"/>
      <Typography variant="h3" component="h2" data-aos="fade-in" justify-content="center">
        Work Experience
      </Typography>
      <WorkExperience/>
      <Box id="skills" paddingTop={10} height="150px"/>
      <Typography  variant="h3" component="h3" data-aos="fade-up" fontFamily={"Ring of Kerry, sans-serif"}>
        Skills
      </Typography>
      <Skills/>
    </Box>
    </div>
  );
}

export default MainContent;