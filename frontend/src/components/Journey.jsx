import React from 'react';
import { motion } from 'framer-motion';
import './Journey.css';

const Journey = () => {
  const steps = [
    {
      year: "2022",
      title: "Beginner Programmer",
      desc: "Started learning the basics of programming. Explored core concepts, algorithmic problem-solving, and foundational computer science principles through academic coursework."
    },
    {
      year: "2023",
      title: "Web Fundamentals",
      desc: "Transitioned into web development. Mastered HTML, CSS, and Vanilla JavaScript to build static and interactive interfaces, realizing a passion for creating visual digital experiences."
    },
    {
      year: "2024",
      title: "MERN Stack Adoption",
      desc: "Dived deep into modern frameworks. Started building dynamic architectures using React.js for the frontend and Node.js/Express with MongoDB for robust scalable backends."
    },
    {
      year: "Present",
      title: "Aspiring Full Stack Developer",
      desc: "Currently focused on crafting high-end, production-ready cinematic web applications. Continuously integrating advanced libraries like Framer Motion for premium user experiences."
    }
  ];

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <motion.h2 
          className="heading-lg text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Developer <span className="text-gradient">Journey</span>
        </motion.h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <span className="timeline-year text-gradient">{step.year}</span>
                <h3 className="heading-md">{step.title}</h3>
                <p className="text-secondary">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
