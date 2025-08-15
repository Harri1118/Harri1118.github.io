import React, { useRef, useEffect } from 'react';
import Sprite from './Sprite';

const CanvasComponent = (props) => {
  const canvasRef = useRef(null);
  const { shapes } = props;
  const capturedShapes = []
  const missedShapes = []

  function drawRectangle(ctx, x, y, width, height) {
    ctx.fillStyle = 'blue'; // Set the color of the rectangle
    ctx.fillRect(x, y, width, height); // Draw the rectangle
  }

  function drawCircle(ctx, x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function checkIfOverlap(circle, rect) {
    const distX = Math.abs(circle.x - rect.x - rect.width / 2);
    const distY = Math.abs(circle.y - rect.y - rect.height / 2);

    if (distX > (rect.width / 2 + circle.radius)) return false;
    if (distY > (rect.height / 2 + circle.radius)) return false;

    if (distX <= (rect.width / 2)) return true;
    if (distY <= (rect.height / 2)) return true;

    const dx = distX - rect.width / 2;
    const dy = distY - rect.height / 2;
    return (dx * dx + dy * dy <= (circle.radius * circle.radius));
  }

  // Clear a specific shape
function clearShape(index, ctx, canvas) {
  shapes.splice(index, 1);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  shapes.forEach(shape => {
    if (shape.type === 'circle') {
      drawCircle(shape.x, shape.y, shape.radius, shape.color);
    } else if (shape.type === 'rect') {
      drawRectangle(shape.x, shape.y, shape.width, shape.height, shape.color);
    }
  });
}

  useEffect(() => {
    console.log(shapes)
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.7;
    const ctx = canvas.getContext('2d');

    // const rectangles = [
    //   { x: 0, y: canvas.height / 6, width: 50, height: 50, speed: 2 },
    //   { x: 100, y: canvas.height / 2, width: 50, height: 50, speed: 3 },
    //   // Add more rectangles with different initial positions and sizes
    // ];
    const rectangles = shapes

    const circle = {
      x: canvas.width * 0.9,
      y: canvas.height / 2,
      radius: 20,
      color: 'red',
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas

      // Draw and move rectangles
      rectangles.forEach(rect => {
        drawRectangle(ctx, rect.x, rect.y, rect.width, rect.height);
        rect.x += rect.speed;
        if (rect.x > canvas.width) {
          rect.x = -rect.width;
        }
      });

      // Check for collisions
      const collision = rectangles.some(rect => checkIfOverlap(circle, rect));
      circle.color = collision ? 'green' : 'red';
      if (collision == true){
        clearShape(rectangles.some(rect => checkIfOverlap(circle, rect)), ctx ,canvas, );
      }
      // Draw circle
      drawCircle(ctx, circle.x, circle.y, circle.radius, circle.color);

      requestAnimationFrame(animate);
    };

    // Update circle position on mousemove
    canvas.addEventListener('mousemove', (event) => {
      const rect = canvas.getBoundingClientRect();
      circle.y = event.clientY - rect.top;
    });

    animate();

    return () => {
      canvas.removeEventListener('mousemove', () => {});
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CanvasComponent;
