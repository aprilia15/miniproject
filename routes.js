const router = require('express').Router();
const usersController = require('./controllers/usersController.js');
const authenticate = require('./middlewares/authenticate.js');

router.post('/auth/register', usersController.register);
router.post('/auth/login', usersController.login);
router.get('/auth/whoAmI', authenticate, usersController.whoAmI);

module.exports = router;
