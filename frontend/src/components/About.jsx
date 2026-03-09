import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="heading-lg text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>
        
        <motion.div 
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="about-text glass-panel" variants={itemVariants}>
            <h3 className="heading-md">Who am I?</h3>
            <p>
              I am a B.Tech Computer Science student at JSS, Noida, and a proficient MERN stack developer. 
              My journey in software engineering is driven by a deep-rooted passion for architecting modern, 
              responsive, and highly scalable web applications.
            </p>
            <p className="mt-2">
              As a full stack developer, I excel at turning complex problems into elegant digital solutions. 
              Whether it's crafting intuitive user interfaces with React, or building robust backend 
              services with Node.js and MongoDB, I am equipped with the skills necessary to deliver 
              high-quality, production-ready software.
            </p>
            <p className="mt-2">
              I am highly motivated, adaptable, and ready to leverage my technical expertise in real-world 
              industry environments to create impactful applications.
            </p>
          </motion.div>
          
          <motion.div className="about-stats" variants={itemVariants}>
            <motion.div 
              className="stat-card glass-panel"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.4)", borderColor: "var(--accent-primary)" }}
            >
              <span className="stat-number text-gradient">MERN</span>
              <span className="stat-label">Core Stack Focus</span>
            </motion.div>
            <motion.div 
              className="stat-card glass-panel"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.4)", borderColor: "var(--accent-primary)" }}
            >
              <span className="stat-number text-gradient">100%</span>
              <span className="stat-label">Commitment to Quality</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
