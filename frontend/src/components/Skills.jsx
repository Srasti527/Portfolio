import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const coreSkills = [
    { name: 'HTML & CSS', level: 90, color: '#E34F26' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'React.js', level: 80, color: '#61DAFB' },
    { name: 'Node.js & Express.js', level: 75, color: '#339933' },
    { name: 'MongoDB', level: 75, color: '#47A248' }
  ];

  const additionalSkills = [
    'Java', 'Python', 'C', 'SQL', 'Tailwind CSS', 'REST APIs', 
    'Git', 'GitHub', 'VS Code', 'Vercel', 'Data Structures & Algorithms', 
    'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="heading-lg text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Technical <span className="text-gradient">Arsenal</span>
        </motion.h2>
        
        <div className="skills-grid">
          {/* Core Skills Highlight */}
          <motion.div 
            className="mern-bars glass-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <h3 className="heading-md text-center mb-4">Core Technologies</h3>
            
            <div className="progress-container">
              {coreSkills.map((skill, index) => (
                <motion.div className="skill-item" key={index} variants={itemVariants}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <motion.div 
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                      style={{ 
                        background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})` 
                      }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Technologies */}
          <motion.div 
            className="other-skills glass-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <h3 className="heading-md text-center mb-4">Additional Competencies</h3>
            
            <div className="tags-container">
              {additionalSkills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-tag"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "var(--accent-primary)",
                    color: "#fff",
                    boxShadow: "0 10px 20px -10px rgba(99, 102, 241, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
