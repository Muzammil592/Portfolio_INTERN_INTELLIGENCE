const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

//You can use this protect middleware when connect this portfolio with some 
// sign-up and login mechanism.

const protect = (req, res, next) => {
   const authHeader = req.headers.authorization;
   const token = authHeader && authHeader.split(' ')[1];
   if (!token) return res.status(401).json({ message: "Unauthorized" });

   try {
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
     req.user = decoded;
     next();
   } catch (err) {
     return res.status(401).json({ message: "Invalid token" });
  }
 };

//You can use this validateInputs middleware when connect this portfolio with some 
// sign-up and login mechanism.

const validateInputs = (validations) => [
  body('username')
    .optional()
    .isString().trim().escape().withMessage('Invalid username'),

  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

module.exports = { protect, validateInputs };
