const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.sendFile('index');
});

module.exports = router;
