import React, { useState } from 'react'
import { Box, IconButton, useMediaQuery } from '@mui/material'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
// If expires again, use htis link: https://raw.githubusercontent.com/Harri1118/Harri1118.github.io/refs/heads/master/src/images/harrison.jpeg
const images = [
    'https://raw.githubusercontent.com/Harri1118/Harri1118.github.io/refs/heads/master/src/images/harrison.jpeg',
    'https://i.ytimg.com/vi/i3p42HhTjvw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfPlbs1cWl6zOzdzgQfeXgP9MdKA',
    'https://i.ytimg.com/vi/mtOD19C7J48/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5cyiU8QVwf-HMwgOgERM6JluUnw'
  ];

  
const ImageSlider = () => {
    const isMobile = useMediaQuery('(max-width:768px)');
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      };
    
      const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      };

      
  return (
    <div>
    {!isMobile &&
    <div>
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
            borderRadius: '0.5rem'
          }}
          alt=""
          src={images[currentImage]}
          data-aos="fade-in"
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
  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 , alignItems: 'center', flexWrap: 'wrap',}}>
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
    </div>
    }
    {isMobile && (
  <div>
    <Box sx={{
      position: 'relative',
      display: 'inline-block',
      width: '55%', // Full width on mobile
      maxWidth: '500px', // Limit the max width for larger screens
      height: '300px', // Adjusted height for better mobile viewing
      overflow: 'hidden',
      margin: '0 auto', // Center the Box on the screen
    }}>
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
              borderRadius: '0.5rem'
            }}
            alt=""
            src={images[currentImage]}
            data-aos="fade-in"
          />
        </CSSTransition>
      </TransitionGroup>
      
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 10, // Ensure it's above the image
        }}
      >
        <ArrowBack />
      </IconButton>
      
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 10, // Ensure it's above the image
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
    
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: 2,
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '0 16px', // Padding for small screens
    }}>
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
  </div>
)}
  </div>
  )
}

export default ImageSlider
