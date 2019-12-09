const router = require('express').Router();
const {
  login,
  logout,
  register
} = require('../controllers/authController.js');

router.get('/login', login);
router.get('/logout', logout);
router.get('/register', register);

module.exports = router;
