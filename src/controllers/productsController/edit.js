const db= require('../../database/models')

module.exports= (req,res)=>{
    const {id} = req.params;
    const products = db.products.findByPk(id, {
        include: ['category','colors','sizes','images']
    })
    const categories = db.category.findAll({
        order: [['name']]
    })
    const colors= db.colors.findAll({
        order: [['name']]
    })
    const sizes= db.sizes.findAll({
        order: [['name']]
    })
    Promise.all([products, categories,colors,sizes])
    .then(([products, categories, colors,sizes]) => {
        return res.render('products/product-edit',{
            ...products.dataValues,
            categories,
            colors,
            sizes
        })
    })
    .catch( error => console.log( error))

} 
