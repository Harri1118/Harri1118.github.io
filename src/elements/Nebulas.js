// import React, { useEffect, useState, useCallback, useRef } from 'react';
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// const Nebulas = (props) =>{
//     const [ init, setInit ] = useState(false);
//     const particlesRef = useRef(null);
//     const {direction} = props
//     const [shaoeLst, setShapeLst] = useState([])
//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             await loadSlim(engine);
//         }).then(() => {
//             setInit(true);
//         });
        
//     }, []);

//     function createRandomShape() {
//         const canvas = document.getElementById('myCanvas');
//         const ctx = canvas.getContext('2d');
      
//         const shapes = ['circle', 'rectangle', 'triangle'];
//         const shape = shapes[Math.floor(Math.random() * shapes.length)];
      
//         const x = Math.random() * canvas.width;
//         const y = Math.random() * canvas.height;
//         const size = Math.random() * 100 + 20; // Size between 20 and 120
      
//         ctx.fillStyle = getRandomColor();
//         ctx.strokeStyle = getRandomColor();
      
//         switch (shape) {
//           case 'circle':
//             ctx.beginPath();
//             ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
//             ctx.fill();
//             ctx.stroke();
//             break;
//           case 'rectangle':
//             ctx.fillRect(x, y, size, size);
//             ctx.strokeRect(x, y, size, size);
//             break;
//           case 'triangle':
//             ctx.beginPath();
//             ctx.moveTo(x, y);
//             ctx.lineTo(x + size, y);
//             ctx.lineTo(x + size / 2, y - size);
//             ctx.closePath();
//             ctx.fill();
//             ctx.stroke();
//             break;
//         }
//       }

      
//     function getRandomColor() {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }

//     return (
//        <Particles 
//         id="tsparticles"
//         ref={particlesRef}
//               options={{
//                   background: {
//                       color: {
//                           //value: "#000000",
//                       },
//                       repeat: "repeat-x",
//                       size: "cover"
//                   },
//                   fpsLimit: 65,
//                   interactivity: {
//                       events: {
//                           onClick: {
//                               enable: false,
//                               mode: "push",
//                           },
//                           onHover: {
//                               enable: false,
//                               mode: "parallax",
//                           },
//                           resize: true,
//                       },
//                       modes: {
//                           push: {
//                               quantity: 4,
//                           },
//                           repulse: {
//                               distance: 200,
//                               duration: 0.4,
//                           },
//                           parallax: {
//                             force: 1
//                           }
//                       },
//                   },
//                   particles: {
//                       color: {
//                           value: "random",
//                       },
//                       move: {
//                           direction: "right",
//                           enable: true,
//                           outModes: {
//                               //default: "bounce",
//                           },
//                           random: false,
//                           speed: 2,
//                           straight: true,
//                       },
//                       number: {
//                           density: {
//                               enable: true,
//                               area: 1000,
//                           },
//                           value: 80,
//                       },
//                       opacity: {
//                           value: 1,
//                       },
//                       shape: {
//                         //type: "polygon",
//                         sides: [3, 4, 5, 6], // Array of possible side counts
//                       },
//                       size: {
//                         value: 70,
//                       },
//                   },
//                   detectRetina: true,
//               }}
//         />
//     );
//   }

//   export default Nebulas

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import options from './options'
const Nebulas = (props) =>{
    const [ init, setInit ] = useState(false);
    const particlesRef = useRef(null);
    const {direction} = props
    const [shaoeLst, setShapeLst] = useState([])
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
        
    }, []);

    function createRandomShape() {
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
      
        const shapes = ['circle', 'rectangle', 'triangle'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
      
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 100 + 20; // Size between 20 and 120
      
        ctx.fillStyle = getRandomColor();
        ctx.strokeStyle = getRandomColor();
      
        switch (shape) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            break;
          case 'rectangle':
            ctx.fillRect(x, y, size, size);
            ctx.strokeRect(x, y, size, size);
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + size, y);
            ctx.lineTo(x + size / 2, y - size);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
        }
      }

      
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
       <Particles 
        id="tsparticles"
        ref={particlesRef}
              options={options}
        />
    );
  }

  export default Nebulas
  /**
   * {
  
   */