const express = require('express');
const router = express.Router();
const {createUser,authenticateUser} = require('../controllers/user');

router.route('/').post(createUser);
router.route('/login').post(authenticateUser);

module.exports = router;