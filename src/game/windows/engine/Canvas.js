import React, { useRef, useEffect } from 'react';

const CanvasComponent = (props) => {
  const canvasRef = useRef(null);
  const {shapes} = props
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
    console.log(shapes)
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

    //let mouseX = 0;

    let mouseY = 0;
    function drawCircle() {

      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  
      ctx.beginPath();
  
      ctx.arc((canvas.width * .9), mouseY, 20, 0, 2 * Math.PI); // Draw circle at mouse position
  
      ctx.fillStyle = "blue";
  
      ctx.fill();
  
  }
    canvas.addEventListener("mousemove", (event) => {

      //mouseX = event.clientX - canvas.offsetLeft;
  
      mouseY = event.clientY - canvas.offsetTop;
  
      drawCircle();
  
    });
    animate();

    return () => {
      circles.forEach(rect => cancelAnimationFrame(rect.animationFrameId));
    };
  }, []);

  return <canvas ref={canvasRef}/>;
};

export default CanvasComponent;