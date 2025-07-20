const Contact = require('../models/contact.js');

exports.submitContactForm = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error submitting contact form', error: error.message });
  }
};