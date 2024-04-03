
const db= require('../../../database/models')
const getAllPorducts= async(req,res) => {
    try {
        const {count, rows} = await db.products.findAndCountAll({
            include : [{
                association : 'category',
                attributes : ['name']
            },
            {
                association : 'colors',
                attributes : ['name']
            },
            {
                association : 'sizes',
                attributes : ['name']
            },
            {
                association : 'images',
                atributes :  ['file']

            }
             
            ],
            attributes: ['id','name', 'description','price','image']
        })

        const  products = rows.map(products => {
            const images = products.images.map(image => ({
                id: image.id,
                file: `${req.protocol}://${req.get('host')}/img/${products.image}`
            }));
            return {
                ...products.dataValues ,
                detail : `${req.protocol}://${req.get('host')}/apis/products/${products.id}`,
                images: images
            }
        })

return  res.status(200).json({
    ok: true,
    count,
    products,

})

        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'hubo un problemita, lo100to '
        })
    }
}

const getOneProducts= async (req,res) => {
    try {
        const products= await db.products.findByPk(req.params.id,{
            include : [{
                association : 'category',
                attributes : ['name']
            },
            {
                association : 'colors',
                attributes : ['name']
            },
            {
                association : 'sizes',
                attributes : ['name']
            },
            {
                association : 'images',
                atributes :  ['file']

            }
             
            ],
            attributes: ['id','name', 'description','price','image']
        })

        const productsCustom = {
            ...products.dataValues,
            image : `${req.protocol}://${req.get('host')}/img/${products.image}`,
            category : products.category.name,
            
        }
        return res.status(200).json({
            ok:true ,
            products:productsCustom
        })
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'hubo un problemita, lo100to '
        })
    }
}

module.exports ={
    getAllPorducts,
    getOneProducts
}