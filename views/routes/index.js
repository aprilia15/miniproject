const router = require('express').Router();
const postRouter = require('./postRouter.js');
const authRouter = require('./authRouter.js');

router.use('/', postRouter);
router.use('/', authRouter);

module.exports = router;
