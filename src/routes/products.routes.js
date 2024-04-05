const express = require('express');
const { detail, add, edit, remove, create, update, camisas, abrigos, pantalones, accesorios, remeras,search } = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const list = require('../controllers/productsController/list');
const productAddVali= require('../../validations/product-add-validator')
const productEditVali= require('../../validations/product-edit-validator');
const checkAdmin = require('../middlewares/checkAdmin');







const router = express.Router();

/* /productos  */
router.get('/detalle/:id?',detail );
router.get('/agregar',add );
router.get('/editar/:id',checkAdmin,productEditVali,edit );
router.post('/crear' ,upload.fields([{name: "image",},{name: "images",},]),productAddVali ,create);
router.delete('/eliminar/:id', remove );
router.put('/actualizar/:id',upload.fields([{name: "image",},{name: "images",},]), update)
router.get('/camisas',camisas);
router.get('/abrigos',abrigos);
router.get('/pantalones',pantalones);
router.get('/accesorios',accesorios);
router.get('/remeras',remeras);
router.get('/listar',list);
router.get('/buscar',search)







module.exports = router;

