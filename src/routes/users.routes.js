const express = require('express');
const { login, register } = require('../controllers/usersController');
const router = express.Router();

/* /usuarios */
router.get('/ingreso',login );
router.get('/registro',register );

module.exports = router;


