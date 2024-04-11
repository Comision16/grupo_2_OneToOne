const { validationResult } = require("express-validator")

const User = require("../data/user");
const {hashSync} = require('bcryptjs')
const db= require('../database/models')
module.exports={
    
    register: (req,res)=> {
        return res.render('users/register')
    },
    processRegister: (req,res)=>{
     const errors =  validationResult(req)
     const {name, surname,email,password,roleId}=req.body
     
     
     
     if(errors.isEmpty()){
        db.users.create({
            name,
            surname,
            email,
            password:hashSync(password.trim(),5),
            roleId :2,

        })
        .then(user => {
            console.log(user);
            return res.redirect('ingreso')
        })
        .catch(error => console.log(error))

    }else{
        return res.render('users/register',{
            old : req.body,
            errors: errors.mapped()
        })
     }},

    login: (req,res)=> {
        return res.render('users/login')
    },
    processLogin : (req, res) => {
        const errors = validationResult(req);
        const { email, remember, } = req.body;
        //return res.send(req.body)

        if (errors.isEmpty()) {
            db.users.findOne({
                where: { email }
            })
                .then(({ id, name, roleId }) => {
                    req.session.userLogin = {
                        id,
                        name,
                        role : +roleId
                    };
                    remember && res.cookie('On3ToOn301_user', req.session.userLogin, {
                        maxAge: 1000 * 60 * 2
                    });
            
                    return roleId == 1 ? res.redirect('/admin') : res.redirect('/');
                })
                .catch(error => {
                    console.error(error);
                    res.render('users/login', {
                        errors: { database: 'Error accessing database' }
                    });
                });
        } else {
            res.render('users/login', {
                errors: errors.mapped()
            });
        }
    },

    logout : (req,res)=>{
        req.session.destroy();
        return res.redirect('/usuarios/ingreso');
    },
    perfil: (req, res) => {
        const userId = req.session.userLogin.id;
        db.users.findByPk(userId)
            .then(user => {
                if (!user) {
                    return res.status(404).send("Usuario no encontrado");
                }
    
                const changePasswordRequested = req.query.change_password === 'true';
                
                // Renderizar la vista y pasar las variables necesarias
                return res.render('users/perfil', { user, changePasswordRequested, errors: [], successMessage: "" });
            })
            .catch(error => {
                console.error(error);
                return res.status(500).send("Error interno del servidor");
            });
    },
    
    actualizarPerfil: (req, res) => {
        const userId = req.session.userLogin.id;
        const { name, surname, email, password, confirmPassword } = req.body;
    
        // Realiza la validación de los campos del formulario
        const errors = validationResult(req); // Importa validationResult desde express-validator
        if (!errors.isEmpty()) {
            return res.render('users/perfil', { errors: errors.array(), user: req.session.userLogin, changePasswordRequested: false, successMessage: "" });
        }
    
        // Si no hay errores, continúa con la actualización del perfil
        // Encripta la contraseña antes de guardarla (si se proporciona)
        let hashedPassword = null;
        if (password && password.trim() !== '') {
            hashedPassword = hashSync(password.trim(), 10);
        }
    
        db.users.findByPk(userId)
            .then(user => {
                if (!user) {
                    return res.status(404).send("Usuario no encontrado");
                }
    
                // Actualiza los datos del usuario
                user.name = name;
                user.surname = surname;
                user.email = email;
    
                // Actualiza la contraseña solo si se proporciona una nueva
                if (hashedPassword) {
                    user.password = hashedPassword;
                }
    
                // Guarda los cambios en la base de datos
                return user.save();
            })
            .then(updatedUser => {
                // Redirige o envía una respuesta de éxito con un mensaje
                const successMessage = "Datos guardados exitosamente"; // Define el mensaje de éxito aquí
                return res.render('users/perfil', { user: updatedUser, successMessage, changePasswordRequested: false, errors: [] });
            })
            .catch(error => {
                console.error(error);
                return res.status(500).send("Error interno del servidor");
            });
    },
    eliminarCuenta: (req, res) => {
        const userId = req.session.userLogin.id;
    
        db.users.findByPk(userId)
            .then(user => {
                if (!user) {
                    return res.status(404).send("Usuario no encontrado");
                }
    
                // Elimina al usuario de la base de datos
                return user.destroy();
            })
            .then(() => {
                // Redirige a la página de inicio o muestra un mensaje de éxito
                req.session.destroy(); // También puedes destruir la sesión del usuario
                return res.redirect('/'); // Cambia esto a la URL a la que quieras redirigir
            })
            .catch(error => {
                console.error(error);
                return res.status(500).send("Error interno del servidor");
            });
    }
}