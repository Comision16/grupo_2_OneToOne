const { validationResult } = require("express-validator")
const User = require("../data/user");
const { leerJSON, escribirJSON } = require("../data");

module.exports={
   
    register: (req,res)=> {
        return res.render('users/register')
    },
    processRegister: (req,res)=>{
     const errors =  validationResult(req)
     const {name, surname,email,password}=req.body
     if(errors.isEmpty()){
        const users= leerJSON('users');
        const newUser= new User ( name, surname, email, password)
     users.push(newUser);
     escribirJSON(users,'users')
    return res.redirect('ingreso')
    
    
    
    }else{
        return res.render('users/register',{
            old : req.body,
            errors: errors.mapped()
        })
     }},

    login: (req,res)=> {
        return res.render('users/login')
    },
    processLogin: (req,res)=>{

        const errors =  validationResult(req)
        const {email,  remember }=req.body
        if(errors.isEmpty()){
            const {id, name, role} = leerJSON('users').find(user => user.email === email)

          req.session.userLogin = {
            id,
            role,
            name,
         }

          remember && res.cookie('On3ToOn301_user',req.session.userLogin,{
            maxAge : 1000 * 60 * 2
        })

          return res.redirect('/')
       
       }else{
           return res.render('users/login',{
               
               errors: errors.mapped()
           })  
        }
    },

    logout : (req,res)=>{
        req.session.destroy();
        return res.redirect('/usuarios/ingreso');
    },
    perfil: (req,res)=>{
        return res.render('users/perfil')
    }
}