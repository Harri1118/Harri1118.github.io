import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackGround = () =>{
    const [ init, setInit ] = useState(false);
  
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
  
    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        init && <Particles 
        id="tsparticles"
              particlesLoaded={particlesLoaded}
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
                              enable: true,
                              mode: "push",
                          },
                          onHover: {
                              enable: true,
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
                          direction: "left",
                          enable: true,
                          outModes: {
                              //default: "bounce",
                          },
                          random: false,
                          speed: 3,
                          straight: false,
                      },
                      number: {
                          density: {
                              enable: true,
                              area: 900,
                          },
                          value: 80,
                      },
                      opacity: {
                          value: 1,
                      },
                      shape: {
                          type: "circle",
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