const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.sendFile('index');
});

// Authentication routes
router.use('/auth', require('./auth.routes'));

// DB admin routes
router.use('/auth', require('./auth.routes'));

router.use('/auth', require('./auth.routes'));

module.exports = router;
