const express = require('express');
const rateLimit = require('express-rate-limit');

const router = express.Router();

const Contact = require('../models/Contact');

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    msg: 'Too many messages sent. Please try again later.'
  }
});

router.post('/', contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
    
    if (name.trim().length > 100) {
      return res.status(400).json({ msg: 'Name is too long' });
    }
    if (email.trim().length > 150 || !email.trim().includes('@') || !email.trim().includes('.')) {
      return res.status(400).json({ msg: 'Please enter a valid email' });
    }
    
    if (message.trim().length > 2000) {
      return res.status(400).json({ msg: 'Message is too long' });
    }

    const newContact = new Contact({
      name,
      email,
      message
    });

    const contact = await newContact.save();
    res.json(contact);

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});


module.exports = router;
