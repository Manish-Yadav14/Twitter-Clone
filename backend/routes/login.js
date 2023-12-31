const express = require('express');
const router = express.Router();
const createUser = require('../controllers/login');

router.route('/').post(createUser);

module.exports = router;