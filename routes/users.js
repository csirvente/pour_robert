const express = require('express');
const router  = express.Router();

/* GET home user page */
router.get('/', (req, res, next) => {
  res.render('users');
});

/* GET home user page */
router.get('/properties', (req, res, next) => {
  res.render('users_properties');
});

module.exports = router;
