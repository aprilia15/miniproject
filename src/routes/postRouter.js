const router = require('express').Router();
const {
  create,
  index,
  show,
  destroy
} = require('../controllers/postController.js');
const authenticate = require('../middlewares/authenticate.js');

router.post('/', authenticate, create);
router.get('/', index);
router.get('/:_id', show);
router.delete('/:_id', authenticate, destroy);

module.exports = router;
