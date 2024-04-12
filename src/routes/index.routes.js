const express = require('express');
const { index, cart, admin, Usersadmin, updateUserRole, eliminarUsuario, productos, updateOrderStatus, createOrder } = require('../controllers/indexController');
const checkAdmin = require('../middlewares/checkAdmin');
const { add } = require('../controllers/productsController');

const router = express.Router();

/* / */
router.get('/', index );
router.get('/carrito',cart )

router.get('/products', checkAdmin,productos )

router.get('/admin', checkAdmin,admin )
router.get('/admin/users', checkAdmin,Usersadmin)
router.get('/productos/agregar', checkAdmin,add )
router.put('/admin/users/:id', updateUserRole);
router.delete('/admin/users/:id', eliminarUsuario);
// Nueva ruta para actualizar el estado de un pedido
router.put('/orders/:id/status', updateOrderStatus);
/* Ruta para Crear una Nueva Orden */
router.post('/orders', createOrder);


module.exports = router;



