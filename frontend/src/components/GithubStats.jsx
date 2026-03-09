import React from 'react';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import './GithubStats.css';

const GithubStats = () => {
    // Replace with actual username later. For visualization purposes, using a generic or the user's name if known to exist.
    const username = "srastijain"; 

    // Custom theme for the GitHub Calendar to match the dark premium aesthetic
    const explicitTheme = {
        light: ['rgba(255,255,255,0.05)', '#6366f1', '#8b5cf6', '#a855f7', '#ec4899'],
        dark: ['rgba(255,255,255,0.05)', '#4f46e5', '#6366f1', '#8b5cf6', '#c084fc'],
    };

    return (
        <section id="github" className="github-section">
            <div className="container">
                <motion.h2 
                    className="heading-lg text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    GitHub <span className="text-gradient">Contributions</span>
                </motion.h2>

                <motion.div 
                    className="github-content glass-panel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="calendar-container">
                        <GitHubCalendar 
                            username={username} 
                            blockSize={15}
                            blockMargin={5}
                            colorScheme="dark"
                            theme={explicitTheme}
                            fontSize={16}
                        />
                    </div>
                </motion.div>
                
                <motion.div 
                  className="github-stats-cards"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                   {/* Fallback stat layout to simulate premium developer portfolio widgets */}
                   <div className="stat-widget glass-panel">
                       <h4 className="text-secondary">Total Repositories</h4>
                       <span className="stat-value text-gradient">20+</span>
                   </div>
                   <div className="stat-widget glass-panel">
                       <h4 className="text-secondary">Contributions (YTD)</h4>
                       <span className="stat-value text-gradient">250+</span>
                   </div>
                   <div className="stat-widget glass-panel">
                       <h4 className="text-secondary">Current Streak</h4>
                       <span className="stat-value text-gradient">12 Days</span>
                   </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GithubStats;
