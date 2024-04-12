const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const productId = req.params.id; 

        const productPromise = db.products.findOne({
            where: { id: productId },
            include: [
                { model: db.images, as: 'images' },
                { model: db.colors, as: 'colors' }, 
                { model: db.sizes, as: 'sizes' }    
            ] 
        });

     

        const colorsPromise = db.colors.findAll({
            order: [['name']]
        });

        const sizesPromise = db.sizes.findAll({
            order: [['name']]
        });

        const [product, colorsdb, sizesdb,] = await Promise.all([productPromise, colorsPromise, sizesPromise]);
       
        db.products.findAll({
            where : {
                categoryId : product.categoryId
            },
            limit : 20
        }).then(productsRelated => {
            return res.render('products/productDetail', {
                colorsdb,
                sizesdb,
                product,
                productsRelated
            });
        })



  
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error interno del servidor');
    }
};