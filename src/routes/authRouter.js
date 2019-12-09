const router = require('express').Router();
const {
  register,
  login,
  whoAmI
} = require('../controllers/usersController.js');
const authenticate = require('../middlewares/authenticate.js');

router.post('/register', register);
router.post('/login', login);
router.get('/whoAmI', authenticate, whoAmI);

module.exports = router;
