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
      <Typography id="projects" variant="h3" component="h2" data-aos="fade-in" justify-content="center">
        Projects
      </Typography>
      <Projects/>
      <Typography id="work-experience" variant="h3" component="h2" data-aos="fade-in" justify-content="center">
        Work Experience
      </Typography>
      <WorkExperience/>
      <Typography id="skills" variant="h3" component="h3" data-aos="fade-up" fontFamily={"Ring of Kerry, sans-serif"}>
        Skills
      </Typography>
      <Skills/>
    </Box>
    </div>
  );
}

export default MainContent;