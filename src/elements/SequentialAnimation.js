import { Box, Link } from '@mui/material';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const goal = `My name is Harrison! I'm a passionate developer with a keen interest in creating dynamic,
user-friendly web applications. With expertise in React.js and other
modern technologies, I enjoy solving complex problems and delivering
impactful solutions.`


function SequentialAnimation() {
  let [showSecondAnimation, setShowSecondAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondAnimation(true);
    }, goal.length * 17 + 1000); // Adjust timing based on the animation duration and pause
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <Box sx={{ width: '600px', height: '300px', margin: '0 auto' }} data-aos="fade-up">
      <TypeAnimation
        sequence={[goal, 1000]}
        wrapper="p"
        speed={80}
        cursor={false}
        style={{ display: 'inline-block', fontSize: '20px' }}
        repeat={1} // Only animate once
      />
      {showSecondAnimation && (
        <Link
          href="https://www.overleaf.com/project/66fb66249304752bb0d0559a"
          target="_blank"
          color="#fff"
        >
          <TypeAnimation
            sequence={['Click here to check out my resume!', 1000]}
            wrapper="p"
            speed={70}
            cursor={false}
            style={{ display: 'inline-block', fontSize: '20px', textDecoration: "underline" }}
            repeat={Infinity}
          />
        </Link>
      )}
    </Box>
  );
}

export default SequentialAnimation;
