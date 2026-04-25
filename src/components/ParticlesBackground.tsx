import React, { useEffect, useRef } from 'react';
import { loadFull } from 'tsparticles';
import { Engine, tsParticles } from 'tsparticles-engine';

const ParticlesBackground: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initParticles = async () => {
      if (!particlesRef.current) return;

      await loadFull(tsParticles);

      await tsParticles.load('particles-container', {
        fullScreen: {
          enable: true,
          zIndex: -2,
        },
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'grab',
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
            value: ['#38bdf8', '#8b5cf6', '#f472b6'],
          },
          links: {
            color: '#38bdf8',
            distance: 150,
            enable: true,
            opacity: 0.75,
            width: 1.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.85,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 2, max: 5 },
          },
        },
        detectRetina: true,
      });
    };

    initParticles();
  }, []);

  return (
    <div
      ref={particlesRef}
      id="particles-container"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
};

export default ParticlesBackground;
