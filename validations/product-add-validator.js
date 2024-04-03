const { check, body } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre del producto es requerido')
        .isLength({
            min : 2
        }).withMessage('El nombre del producto debe tener un mínimo de 5 caracteres'), 

    check('price')
        .notEmpty().withMessage('El precio del producto es requerido')
        .isInt().withMessage('El precio del producto debe ser un número'),

    check('colors')
        .notEmpty().withMessage('El color es requerido'),

    check('sizes')
        .notEmpty().withMessage('El talle es requerido'),


    check('categoryId')
        .notEmpty().withMessage('La categoría del producto es requerida'),
        body('image')
        .custom((value, {req}) => {
            if(!req.files.image){
                return false
            }
            return true
        }).withMessage('Se require una imagen'),

    check('description')
        .notEmpty().withMessage('La descripción producto es requerida')
        .isLength({
            min : 2,
            max: 500
        }).withMessage('La descripcion del producto debe tener un mínimo de 20 caracteres y un máximo de 500 caracteres.'), 
]