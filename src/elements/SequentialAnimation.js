import { Box, Link, useMediaQuery } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../App.css'
const goal = `Hi, I'm Harrison! As a passionate web developer, I specialize in building dynamic, user-friendly web applications. 
With expertise in both front-end and back-end technologies, I thrive on solving complex problems and crafting impactful digital solutions.`


const SequentialAnimation = React.memo(function SequentialAnimation() {
  let [showSecondAnimation, setShowSecondAnimation] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondAnimation(true);
    }, goal.length * 22 + 1000); // Adjust timing based on the animation duration and pause
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <div>
    {!isMobile &&
      <Box sx={{ width: '600px', height: '300px', margin: '0 auto' }} data-aos="fade-up">
      <TypeAnimation
        sequence={[goal, 1000]}
        wrapper="p"
        speed={80}
        cursor={false}
        style={{ display: 'inline-block', fontSize: '20px', fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', textAlign: 'left' }}
        repeat={1} // Only animate once
        
      />
      {showSecondAnimation && (
        <Link
          href="https://drive.google.com/file/d/1WqcnOVMhnEjOj5563100YjJp23drWgLR/preview"
          target="_blank"
          rel="noopener noreferrer"
          color="#fff"
        >
          <TypeAnimation
            sequence={['Click here to check out my resume!', 1000]}
            wrapper="p"
            speed={70}
            cursor={false}
            style={{ display: 'inline-block', fontSize: '20px', textDecoration: "underline", fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4' }}
            repeat={Infinity}
          />
        </Link>
      )}
      </Box>
    }
    {isMobile && (
  <Box
    sx={{
      width: '90%', // Responsive width
      maxWidth: '600px', // Limit maximum width
      height: 'auto', // Adjust height automatically
      margin: '0 auto',
      padding: '10px', // Add some padding for better spacing
    }}
    data-aos="fade-up"
  >
    <TypeAnimation
      sequence={[goal, 1000]}
      wrapper="p"
      speed={80}
      cursor={false}
      style={{
        display: 'inline-block',
        fontSize: '18px', // Slightly smaller font for mobile
        fontFamily: 'Bruno Ace SC, serif',
        fontStyle: 'normal',
        color: '#7BAFD4',
        textAlign: 'left',
        wordWrap: 'break-word', // Ensure long text wraps
      }}
      repeat={1} // Only animate once
    />
    {showSecondAnimation && (
      <Link
        href="https://drive.google.com/file/d/1WqcnOVMhnEjOj5563100YjJp23drWgLR/preview"
        target="_blank"
        rel="noopener noreferrer"
        color="#fff"
        style={{ display: 'block', marginTop: '10px' }} // Better spacing
      >
        <TypeAnimation
          sequence={['Click here to check out my resume!', 1000]}
          wrapper="p"
          speed={70}
          cursor={false}
          style={{
            display: 'inline-block',
            fontSize: '18px', // Consistent with above
            textDecoration: 'underline',
            fontFamily: 'Bruno Ace SC, serif',
            fontStyle: 'normal',
            color: '#7BAFD4',
            wordWrap: 'break-word',
          }}
          repeat={Infinity}
        />
      </Link>
    )}
  </Box>
)}
    </div>
  );
})

export default SequentialAnimation;
