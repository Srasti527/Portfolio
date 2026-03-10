import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Clicks-By-Srasti',
      description: 'A responsive photography sidebar project.',
      image: 'https://images.unsplash.com/photo-1554046920-90dcac824b20?w=800&q=80',
      tech: ['HTML', 'CSS'],
      liveLink: 'https://srasti527.github.io/Clicked-by-Srasti/',
      githubLink: 'https://github.com/Srasti527/Clicked-by-Srasti.git'
    },
    {
      id: 2,
      title: 'Simon Game',
      description: 'An interactive web-based memory game inspired by the classic Simon electronic game. Test your memory with increasing levels of difficulty.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://srasti527.github.io/Simon-game/',
      githubLink: 'https://github.com/Srasti527/Simon-game.git'
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'A responsive, dark-themed personal portfolio website built to showcase my skills, projects, and contact information as a Full Stack Developer.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          className="heading-lg text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
            >
              <Tilt
                className="project-card glass-panel"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glarePosition="all"
                style={{ height: '100%' }}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveLink} className="btn btn-primary glow-effect" target="_blank" rel="noreferrer">Live Demo</a>
                      <a href={project.githubLink} className="btn btn-outline bg-dark" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <h3 className="heading-md">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
