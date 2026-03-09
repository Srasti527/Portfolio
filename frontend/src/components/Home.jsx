import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaEnvelope, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiLeetcode, SiMongodb } from 'react-icons/si';
import './Home.css';

// Magnetic Button Wrapper
const MagneticButton = ({ children, className, href }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3); // Magnetic pull strength
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={className}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-background">
        <motion.div
          className="gradient-sphere sphere-1"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="gradient-sphere sphere-2"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="floating-icon icon-react"
          animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaReact color="#61DAFB" />
        </motion.div>
        <motion.div
          className="floating-icon icon-node"
          animate={{ y: [15, -15, 15], rotate: [0, -15, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <FaNodeJs color="#339933" />
        </motion.div>
        <motion.div
          className="floating-icon icon-mongo"
          animate={{ y: [-10, 20, -10], rotate: [0, 20, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <SiMongodb color="#47A248" />
        </motion.div>
      </div>

      <div className="container home-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi, I am
          </motion.p>
          <motion.h1
            className="heading-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Srasti Jain <br />
            <span className="text-gradient">Full Stack Developer</span>
          </motion.h1>
          <motion.div
            className="text-lead mt-4 tagline-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Typewriter
              words={[
                'Crafting modern, responsive and high-performance web applications.',
                'Turning complex ideas into interactive digital reality.',
                'Continuously learning and building real-world projects.'
              ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <MagneticButton href="#projects" className="btn btn-primary glow-effect">
              View Projects
            </MagneticButton>
            <MagneticButton href="#contact" className="btn btn-outline">
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.a href="https://github.com/Srasti527" target="_blank" rel="noreferrer" className="social-icon" whileHover={{ y: -5, color: "var(--accent-primary)" }}>
              <FaGithub />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/srasti-j-3441b12a6" target="_blank" rel="noreferrer" className="social-icon" whileHover={{ y: -5, color: "#0077b5" }}>
              <FaLinkedin />
            </motion.a>
            <motion.a href="https://leetcode.com/u/srast2j84/" target="_blank" rel="noreferrer" className="social-icon" whileHover={{ y: -5, color: "#FFA116" }}>
              <SiLeetcode />
            </motion.a>
            <motion.a href="https://medium.com/@srasti965" target="_blank" rel="noreferrer" className="social-icon" whileHover={{ y: -5, color: "#00ab6c" }}>
              <FaMedium />
            </motion.a>
            <motion.a href="https://x.com/TerminalThinker" target="_blank" rel="noreferrer" className="social-icon" whileHover={{ y: -5, color: "#1DA1F2" }}>
              <FaTwitter />
            </motion.a>
            <motion.a href="mailto:srasti965@gmail.com" className="social-icon" whileHover={{ y: -5, color: "var(--accent-secondary)" }}>
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
