const express = require('express');
const router  = express.Router();

/* GET home items page */
router.get('/', (req, res, next) => {
  res.render('items');
});

/* GET home items page */
router.get('/public', (req, res, next) => {
  res.render('items', {title: 'public'});
});

module.exports = router;
