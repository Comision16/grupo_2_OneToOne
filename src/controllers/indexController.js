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
    }
}