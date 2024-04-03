const express = require('express');
const { index, cart, admin } = require('../controllers/indexController');
const checkAdmin = require('../middlewares/checkAdmin');
const router = express.Router();

/* / */
router.get('/', index );
router.get('/carrito',cart )


router.get('/admin', checkAdmin,admin )
router.get('/productos/agregar', checkAdmin,admin )


module.exports = router;


