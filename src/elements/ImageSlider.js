import React, { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const images = [
    'https://media.licdn.com/dms/image/v2/D4E35AQHdsxZsWWeGNw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1724352473197?e=1736730000&v=beta&t=F8pOTs1kJOwFcjFXsmj45Wk0Xfg58d6al2OffBzkqaM',
    'https://i.ytimg.com/vi/i3p42HhTjvw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfPlbs1cWl6zOzdzgQfeXgP9MdKA',
    'https://i.ytimg.com/vi/mtOD19C7J48/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5cyiU8QVwf-HMwgOgERM6JluUnw'
  ];

  
const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      };
    
      const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      };

      
  return (
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
          alt="The house from the offer."
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
  )
}

export default ImageSlider