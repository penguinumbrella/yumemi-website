import React, { useCallback } from 'react';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const StarField = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log('Beautiful stars loaded! ✨');
  }, []);

  return (
    <Particles
      id="starField"
      className="absolute inset-0"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
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
            value: ["#ffffff", "#f0f8ff", "#e6f3ff", "#f5f5f5"],
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.3,
            straight: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 150,
          },
          opacity: {
            value: 0.7,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              color: "#ffffff",
              frequency: 0.05,
              opacity: 1,
            },
          },
          life: {
            duration: {
              sync: false,
              value: 5,
            },
            count: 1,
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: "random",
            animation: {
              enable: true,
              speed: 5,
            },
          },
          orbit: {
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
            radius: 100,
            rotation: {
              value: 0,
              random: true,
            },
          },
        },
        detectRetina: true,
        fullScreen: {
          enable: false,
          zIndex: 1,
        },
        emitters: {
          direction: "none",
          life: {
            count: 0,
            duration: 0.1,
            delay: 0.1,
          },
          rate: {
            delay: 0.15,
            quantity: 1,
          },
          size: {
            width: 0,
            height: 0,
          },
          spawnColor: {
            value: "#ffffff",
            animation: {
              h: {
                enable: true,
                offset: {
                  min: 0,
                  max: 360,
                },
                speed: 30,
                sync: true,
              },
              l: {
                enable: true,
                offset: {
                  min: 0,
                  max: 100,
                },
                speed: 0,
                sync: true,
              },
            },
          },
        },
      }}
    />
  );
};

export default StarField;
