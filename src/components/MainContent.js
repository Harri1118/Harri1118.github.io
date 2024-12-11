// src/components/MainContent.js
import React, { useEffect } from 'react';
import Header from './Header'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Typography, Box} from '@mui/material'
function MainContent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="main-content">
      {/*<section data-aos="fade-up">Links</section>*/}
      

    <Box
      component="header"
      data-aos="fade-up"
      className="header"
      sx={{ textAlign: 'center', padding: '2rem' }}
    >
      <Typography variant="h3" component="h2" data-aos="fade-in" justify-content="center">
        Projects
      </Typography>
    
      <Projects/>
      <Typography variant="h3" component="h2" data-aos="fade-in" justify-content="center">
        Work Experience
      </Typography>
      <WorkExperience/>
      
      <section data-aos="fade-up">Education</section>
      {/* Add this later: <section data-aos="fade-up">Certifications</section> */}
    </Box>
    </div>
  );
}

export default MainContent;