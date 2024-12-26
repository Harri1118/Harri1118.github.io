import React, { useRef, useEffect } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  function drawCircle(ctx, x, y, radius) {
    ctx.fillStyle = 'blue'; // Set the color of the rectangle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2); // Draw the circle
    ctx.fill();
  }

  
  function drawRectangle(ctx, x, y, width, height) {
    ctx.fillStyle = 'blue'; // Set the color of the rectangle
    ctx.fillRect(x, y, width, height); // Draw the rectangle
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.7;
    const ctx = canvas.getContext('2d');

    const circles = [
      { x: 0, y: canvas.height / 9, width: 50, speed: 5 },
      { x: 100, y: canvas.height / 6, width: 50, speed: 5 },
      // Add more rectangles with different initial positions and sizes
    ];

    
    const rectangles = [
      { x: 0, y: canvas.height / 6, width: 50, height: 50, speed: 5 },
      { x: 100, y: canvas.height / 2, width: 50, height: 50, speed: 5 },
      // Add more rectangles with different initial positions and sizes
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas

      circles.forEach(rect => {
        drawCircle(ctx, rect.x, rect.y, rect.width);
        rect.x += rect.speed;
        if (rect.x > canvas.width) {
          rect.x = 0;
        }
      });

      rectangles.forEach(rect => {
        drawRectangle(ctx, rect.x, rect.y, rect.width, rect.height);
        rect.x += rect.speed;
        if (rect.x > canvas.width) {
          rect.x = 0;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      circles.forEach(rect => cancelAnimationFrame(rect.animationFrameId));
    };
  }, []);

  return <canvas ref={canvasRef}/>;
};

export default CanvasComponent;