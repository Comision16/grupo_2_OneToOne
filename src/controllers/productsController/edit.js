const db= require('../../database/models')

module.exports= (req,res)=>{
    const {id} = req.params;
    const products = db.products.findByPk(id, {
        include: ['category','colors','sizes','images']
    })
    const categories = db.category.findAll({
        order: [['name']]
    })
    const colorsdb= db.colors.findAll({
        order: [['name']]
    })
    const sizesdb= db.sizes.findAll({
        order: [['name']]
    })
    Promise.all([products, categories,colorsdb,sizesdb])
    .then(([products, categories, colorsdb,sizesdb]) => {
        return res.render('products/product-edit',{
            ...products.dataValues,
            categories,
            colorsdb,
            sizesdb
        })
    })
    .catch( error => console.log( error))

} 
