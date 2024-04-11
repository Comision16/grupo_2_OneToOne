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
                console.log("Datos del usuario:", user);
    
              
                return res.render('users/perfil', {
                    user,
                    changePasswordRequested,
                    errors: req.session.errors || [],
                    successMessage: req.session.successMessage || "",
                    old: {
                        name: user.name,
                        surname: user.surname,
                        email: user.email
                    }
                })
            })
            .catch(error => {
                console.error(error);
                return res.status(500).send("Error interno del servidor");
            });
            
    },
   
    actualizarPerfil: async (req, res) => {
        const userId = req.session.userLogin.id;
        const { name, surname, email, password } = req.body;
    
        try {
            let user = await db.users.findByPk(userId);
    
            if (!user) {
                return res.status(404).send("Usuario no encontrado");
            }
    
           
            if (name) user.name = name;
            if (surname) user.surname = surname;
            if (email) user.email = email;
            if (password) {
                
                const hashedPassword = hashSync(password, 10); 
                user.password = hashedPassword;
            }
    
           
            await user.save();
    
            
            req.session.successMessage = "Datos actualizados correctamente"; 
            return res.redirect('/usuarios/perfil');
        } catch (error) {
            console.error(error);
            return res.status(500).send("Error interno del servidor");
        }
    },
    eliminarCuenta: (req, res) => {
        const userId = req.session.userLogin.id;
    
        db.users.findByPk(userId)
            .then(user => {
                if (!user) {
                    return res.status(404).send("Usuario no encontrado");
                }
    
              
                return user.destroy();
            })
            .then(() => {
               
                req.session.destroy(); 
                return res.redirect('/'); 
            })
            .catch(error => {
                console.error(error);
                return res.status(500).send("Error interno del servidor");
            });
    }
}