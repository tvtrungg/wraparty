import { aboutUs } from "@/app/data";
import { motion, useScroll } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";

const optionsParticles: ISourceOptions = {
  background: {
    color: {
      value: "#000",
    },
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  fpsLimit: 120,
  interactivity: {
    events: {
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
      opacity: 0.3,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 4,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 2, max: 6 },
    },
  },
  detectRetina: true,
};

const AboutPage = function AboutPage() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={optionsParticles}
        width="100px"
        height="100px"
      />
      <div className="w-3/6 h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-neon-red text-5xl text-center mb-8"
        >
          ABOUT US
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full text-neon-white text-xl mb-6 text-center"
        >
          {aboutUs.slogan}
        </motion.div>
        {aboutUs.info.map((info, index) => {
          return (
            <motion.div
              key={info}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="w-full text-center text-white text-lg mb-2"
            >
              {info}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPage;
