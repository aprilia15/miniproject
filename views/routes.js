const router = require('express').Router();
const authenticate = require('./middlewares/authenticate.js');

router.get('/', authenticate, function(req, res) {
  res.render('index');
})

module.exports = router;
