const express = require('express');
const { getAllPorducts, getOneProducts } = require('../controllers/productsController/apis/productsApiController');
const { getAllUsers, getOneUsers } = require('../controllers/productsController/apis/usersApi');
const upload = require('../middlewares/upload');
const { addImageProduct, removeImageProduct, updateImageMainProduct } = require('../controllers/productsController/apis/imagesApiController');
const router = express.Router();

/* /apis */

//products
router.get('/products', getAllPorducts);
router.get('/products/:id', getOneProducts);

//users
router.get('/users',getAllUsers );
router.get('/users/:id',getOneUsers );

//images
router.post('/images/:id', upload.any(), addImageProduct)
router.delete('/images',removeImageProduct)
router.post('/images/:id/main',upload.any(),updateImageMainProduct)


module.exports = router;


