import { FC } from "react";
import Particles from "react-tsparticles";

const HomeParticles:FC = () => {
  // Returning particles component with configured options
  if (typeof window !== "undefined") {
    return (
      <Particles className="home-particles"
          options={{
            background: {
              color: {
                value: "#fff",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
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
                value: "#a565be",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "bottom",
                enable: true,
                outMode: "out",
                random: false,
                speed: 1.25,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 40,
                },
                value: 4,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        
        
        />
    )
  } else {
    return null;
  }
}

export default HomeParticles;
