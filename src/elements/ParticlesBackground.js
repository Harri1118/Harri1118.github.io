import React, { useEffect, useState, useCallback, useRef } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackGround = (props) =>{
    const [ init, setInit ] = useState(false);
    const particlesRef = useRef(null);
    const {direction} = props
    
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
        
    }, []);


    return (
        <Particles
        id="tsparticles"
        options={{
            background: {
                color: {
                    value: "#000000",
                },
            },
            fpsLimit: 70,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 1,
                    width: 1,
                },
                move: {
                    direction: "right",
                    enable: true,
                    random: false,
                    speed: 3,
                    straight: true,
                },
                number: {
                    density: {
                        enable: true,
                        area: 900,
                    },
                    value: 80,
                },
                opacity: {
                    value: "random(0.5,1)",
                },
                shape: {
                    type: "star",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }}
            
        />
    );
  }

  export default ParticlesBackGround