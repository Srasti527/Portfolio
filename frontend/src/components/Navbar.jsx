import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/Srasti_Jain_Resume.pdf', isResume: true },
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-container container">
        <motion.a 
          href="#home" 
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-gradient">&lt;Srasti /&gt;</span>
        </motion.a>
        
        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {navLinks.filter(link => !link.isResume).map((link, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.a 
                href={link.href} 
                className="navbar-link"
                whileHover={{ scale: 1.1, color: "var(--accent-primary)" }}
              >
                {link.name}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="navbar-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu open"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <ul>
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (index * 0.1) }}
                >
                  <a 
                    href={link.href} 
                    className="mobile-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                    target={link.isResume ? "_blank" : undefined}
                    rel={link.isResume ? "noopener noreferrer" : undefined}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
