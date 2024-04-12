const db = require('../../../database/models')

const storeCart = async (req,res) => {

    console.log(req.body);

    try {

        const {user, products, total, status} = req.body;

        const order = await db.Order.create({
            usersId : user,
            dateOrder : new Date(),
            total,
            statusId : status || 1
        })

        const products_db = products.map(product => {
            return {
                orderId : order.id,
                productsId : product.id,
                quantity : product.quantity,
                total : product.price * product.quantity
            }
        })

        await db.items.bulkCreate(products_db, {
            validate : true
        });




        return  res.status(200).json({
            ok: true,
            msg : 'Datos guardados con éxito!'
        
        })
        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'hubo un problemita, lo100to '
        })
    }
}

module.exports = {
    storeCart
}