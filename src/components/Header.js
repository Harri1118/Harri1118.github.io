import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      <Box
        component="img"
        sx={{
        height: 233,
        width: 350,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
      }}
        alt="The house from the offer."
        src="https://media.licdn.com/dms/image/v2/D4E35AQHdsxZsWWeGNw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1724352473197?e=1734544800&v=beta&t=U7vcq3gXd64hB2utTVi5wav9QTu_rdagXRcFgJ6piQU"
      />
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
      </Box>
    </Box>
  );
}

export default Header;