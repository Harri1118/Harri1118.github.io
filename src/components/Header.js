import React, { useEffect, useState } from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import AOS from 'aos';
import '../css/Header.css';
import 'aos/dist/aos.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const images = [
  'https://media.licdn.com/dms/image/v2/D4E35AQHdsxZsWWeGNw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1724352473197?e=1734544800&v=beta&t=U7vcq3gXd64hB2utTVi5wav9QTu_rdagXRcFgJ6piQU',
  'https://i.ytimg.com/vi/i3p42HhTjvw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfPlbs1cWl6zOzdzgQfeXgP9MdKA',
  'https://i.ytimg.com/vi/mtOD19C7J48/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5cyiU8QVwf-HMwgOgERM6JluUnw'
];

function Header() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

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
      <Box sx={{ position: 'relative', display: 'inline-block', width: '70%', height: '400px', overflow: 'hidden' }}>
        <TransitionGroup>
          <CSSTransition
            key={currentImage}
            timeout={500}
            classNames="slide"
          >
            <Box
              component="img"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              alt="The house from the offer."
              src={images[currentImage]}
            />
          </CSSTransition>
        </TransitionGroup>
        <IconButton
          onClick={handlePrev}
          sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              height: 10,
              width: 10,
              borderRadius: '50%',
              backgroundColor: currentImage === index ? 'primary.main' : 'grey.400',
              mx: 0.5,
            }}
          />
        ))}
      </Box>
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