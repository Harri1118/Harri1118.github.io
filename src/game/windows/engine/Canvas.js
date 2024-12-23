import React, { useRef, useEffect } from 'react';

const CanvasComponent = ({ width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Initial canvas setup
    context.fillStyle = 'red';
    let r = context.fillRect(5, 5, 200, 200);
    console.log(r)
    // Event handler for click
    const handleClick = () => {
      context.fillStyle = 'blue';
      context.fillRect(5, 5, width, height);
    };

    // Add click event listener
    canvas.addEventListener('click', handleClick);
    
    // Cleanup on unmount
    return () => {
      canvas.removeEventListener('click', handleClick);
    };
  }, [width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default CanvasComponent;
