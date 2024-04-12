const db = require('../database/models');
const fetch = require('node-fetch').default;

module.exports = {
    index: (req, res) => {
        db.products.findAll()
            .then(products => {
                return res.render('index', {
                    products
                });
            })
            .catch(error => console.log(error));
    },
    cart: (req, res) => {
        db.products.findAll()
            .then(products => {
                return res.render('productCart', {
                    products
                });
            })
            .catch(error => console.log(error));
    },
    admin: (req, res) => {
        db.products.findAll({
                include: ['category', 'colors', 'sizes'],
            })
            .then(products => {
                return res.render('indexDashboard', {
                    products
                });
            })
            .catch(error => console.log(error));
    },
    productos: (req, res) => {
        db.products.findAll({
                include: ['category', 'colors', 'sizes'],
            })
            .then(products => {
                return res.render('dashboard', {
                    products
                });
            })
            .catch(error => console.log(error));
    },
    Usersadmin: async (req, res) => {
        try {
       

            const users= await db.users.findAll({
                include:['role']
           
            })
            const roles= await db.roles.findAll()

            res.render('usersControl', {
                users,
                roles
            }); // Pasar los usuarios a la vista usersControl
        } catch (error) {
            console.error(error);
            res.status(500).send('Error obteniendo usuarios');
        }
    },
    updateUserRole: (req, res) => {
        const { id } = req.params;
        const { role } = req.body;
    
        db.users.findByPk(id)
          .then(user => {
            if (!user) {
              return res.status(404).send("Usuario no encontrado");
            }
    
           
            user.role = role;
    
           
            return user.save();
          })
          .then(updatedUser => {
          
            const successMessage = "Rol actualizado exitosamente";
            return res.redirect('/admin/users'); 
          })
          .catch(error => {
            console.error(error);
            return res.status(500).send("Error interno del servidor");
          });
      },
      eliminarUsuario: (req, res) => {
        const { id } = req.params;
      
        db.users.findByPk(id)
          .then(user => {
            if (!user) {
              return res.status(404).send("Usuario no encontrado");
            }
      
           
            return user.destroy();
          })
          .then(() => {
        
            const successMessage = "Usuario eliminado exitosamente"; 
            return res.redirect('/admin/users'); 
          })
          .catch(error => {
            console.error(error);
            return res.status(500).send("Error interno del servidor");
          });
      },
    searchAdmin: (req, res) => {

        const { keyword } = req.query

        db.products.findAll({
                where: {
                    name: {
                        [Op.substring]: keyword
                    }
                },
                include: ['category']
            })
            .then(result => {
                return res.render('dashboard', {
                    products: result,
                    keyword
                });
            })
            .catch(error => console.log(error));
    },
    search: (req, res) => {

        const { keyword } = req.query

        db.Products.findAll({
                where: {
                    name: {
                        [Op.substring]: keyword
                    }
                },
                include: ['products', 'category']
            })
            .then(result => {
                return res.render('dashboard', {
                    products: result,
                    keyword
                });
            })
            .catch(error => console.log(error));
    },
    updateOrderStatus: async (req, res) => {
        try {
            console.log('Datos de la orden recibidos:', req.body);
          const { id } = req.params;
          const { statusId } = req.body;
    
          
          const order = await db.Order.findByPk(id);
    
       
          if (!order) {
            return res.status(404).send("Pedido no encontrado");
          }
    
        
          order.statusId = statusId;
          await order.save();
    
      
          res.status(200).send("Estado del pedido actualizado correctamente");
        } catch (error) {
          console.error(error);
          res.status(500).send("Error interno del servidor");
        }
      }, createOrder: async (req, res) => {
        try {
         
            const { usersId, total } = req.body;
    
           
            const defaultStatusId = 1;
    
        
            if (!usersId || !total) {
                return res.status(400).send('Faltan datos requeridos para crear la orden');
            }
    
           
            const newOrder = await db.Order.create({
                usersId: usersId,
                total: total,
                statusId: defaultStatusId,
                
            });
    
            res.status(201).json({ orderId: newOrder.id });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear la orden');
        }
    }
      
}