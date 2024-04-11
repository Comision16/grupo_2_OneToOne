const express = require('express');
const { login, register, processLogin, processRegister, logout, perfil, actualizarPerfil, eliminarCuenta } = require('../controllers/usersController');
const userRegisterValidator = require('../../validations/user-register-validator');
const userLoginValidator = require('../../validations/user-login-validator');
const perfilValidator = require('../../validations/perfilValidations');
const { validationResult } = require('express-validator');
const router = express.Router();

/* /usuarios */
router.get('/ingreso', login);
router.get('/registro', register);
router.post('/ingreso', userLoginValidator, processLogin);
router.post('/registro', userRegisterValidator, processRegister);
router.get('/salir', logout);

// Definición única para la ruta /perfil
router.get('/perfil', perfilValidator, perfil);

router.post('/perfil', perfilValidator, actualizarPerfil);

router.post('/eliminar-cuenta', eliminarCuenta);

module.exports = router;


