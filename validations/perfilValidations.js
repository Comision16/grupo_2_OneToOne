const {check, body }=require("express-validator");
const db= require('../src/database/models')

module.exports =[
    check("name")
         .notEmpty().withMessage('Campo Obligatorio').bail()
         .isLength({
            min: 2
         }).withMessage('Minimo dos caracteres ').bail()
         .isAlpha('es-ES', {ignore: ' ' }).withMessage('Solo caracteres Alfabeticos'),
        //------------------------------------------------------------------------------------//
         check("surname")
         .notEmpty().withMessage('Campo Obligatorio').bail()
         .isLength({
            min: 2
         }).withMessage('Minimo dos caracteres en este campo').bail()
         .isAlpha('es-ES', {ignore: ' ' }).withMessage('Solo caracteres Alfabeticos'),
         //-------------------------------------------------------------------------------------//
         check('email')
         .notEmpty().withMessage('Campo Obligatorio').bail()
         .isEmail().withMessage('El email tiene un formato invalido').bail()
         .custom((value, {req}  )=>{
       return db.users.findOne({
        where : {
         email:value
   }
}).then(user => {
   if (user) {
      return Promise.reject()
   }
   
}).catch(error => {
   console.log(error);
   return Promise.reject('El email ya se encuentra registrado')
})

      
         } ),
         //--------------------------------------------------------------------------------------//
         check("password")
         .notEmpty().withMessage('Campo Obligatorio')
         .isLength({
            min: 6
         }).withMessage('Minimo 6 y 10 caracteres'),
         
       
         //---------------------------------------------------------//
    
] 

