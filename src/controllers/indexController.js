
const db = require('../database/models')
const products = require("../database/models/products")

module.exports ={
    index: (req,res)=> {
        
        db.products.findAll()
        .then(products => {
            return res.render('index', {
                products
            })
        })
        .catch(error => console.log(error))
    },
    cart: (req,res)=> {
        db.products.findAll()
        .then(products => {
            return res.render('productCart', {
                products
            })
        })
        .catch(error => console.log(error))
        
    },
    admin: (req,res)=> {
        db.products.findAll({
            include:['category','colors','sizes'],
          
        })
        .then(products => {
       
            return res.render('dashboard',{
                products
            } )
        })
        .catch(error => console.log(error))
        

       
    },searchAdmin : (req,res) => {  

        const {keyword} = req.query

        db.products.findAll({
            where : {
                name : {
                    [Op.substring] : keyword
                }
            },
            include : ['category']
        })
            .then(result => {
                return res.render('dashboard', {
                    products : result,
                    keyword
                })
            })
            .catch(error => console.log(error))

     

      
    },
    search : (req,res) => {

        const {keyword} = req.query

        db.Products.findAll({
            where : {
                name : {
                    [Op.substring] : keyword
                }
            },
            include : ['products','category']
        })
            .then(result => {
                return res.render('dashboard', {
                    products : result,
                    keyword
                })
            })
            .catch(error => console.log(error))

     

      
    }
    
    
}