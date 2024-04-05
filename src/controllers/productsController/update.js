const { validationResult } = require("express-validator");
const { existsSync, unlinkSync } = require("fs");
const db = require('../../database/models')

module.exports = (req, res) => {

    const errors = validationResult(req);
    const image = req.files.image;
    const images = req.files.images;

    const {
        name,
        description,
        category,
        sizes,
        price,
        descount,
        colors,
        categoryId,
        setionId
    } = req.body;

    const { id } = req.params;


    const sizesArray = typeof sizes == "string" ? [sizes] : sizes;
    const colorsArray = typeof colors == "string" ? [colors] : colors;

    if (errors.isEmpty()) {
        db.products.findByPk(id, {
            include: ['images']
        }).then((products) => {
            if (image) {
                existsSync("public/img/" + products.image) &&
                    unlinkSync("public/img/" + products.image)
            }
            db.products.update({
                name,
                description,
                category,
                price,
                descount,
                image: image ? image[0].filename : image,
                categoryId,
                setionId,
            },
                {
                    where: {
                        id,
                    },
                })
                .then( async () => {

                    

                    //crear un array acorde al modelo
                    if(sizesArray){
                    //eliminar las filas referidas al producto
                    await db.products_sizes.destroy({
                        where : {
                            productsId : id
                        }
                    });
                    const sizesDB = sizesArray.map(size => {
                        return {
                            sizesId : size,
                            productsId : id
                        }
                    });

                    //guadar todos los registros
                    await db.products_sizes.bulkCreate(sizesDB, {
                        validate : true
                    });
                    }

                    if(colorsArray){
                        await db.products_colors.destroy({
                            where : {
                                productsId : id
                            }
                        });
    
                        const colorsDB = colorsArray.map(color => {
                            return {
                                colorsId : color,
                                productsId : id
                            }
                        });
            
                        await db.products_colors.bulkCreate(colorsDB, {
                            validate : true
                        });
                    }
                  

                  


                    if (images) {
                        products.images.forEach((image) => {
                            existsSync("public/img/" + image.file) &&
                                unlinkSync("public/img/" + image.file);
                        });

                        db.images.destroy({
                            where: {
                                productsId: id
                            }
                        }).then(() => {
                            const imagesDB = images.map(images => {
                                return {
                                    file: images.filename,
                                    productsId: products.id
                                }
                            })

                            db.images.bulkCreate(imagesDB, {
                                validate: true
                            }).then(result => {
                                console.log(result);
                                return res.redirect("/admin");
                            })
                        })
                    } 
                });

        })


            .then(product => {
                console.log(product);
                this.images = images ? images.map(image => image.filename) : [];

                if (images) {

                    const imagesDB = images.map(image => {
                        return {
                            file: image.filename,
                            productsId: product.id
                        }
                    })

                    db.images.bulkCreate(imagesDB, {
                        validate: true
                    }).then(result => {
                        console.log(result);
                        return res.redirect("/admin");
                    })
                } else {
                    return res.redirect("/admin");
                }


            }).catch(error => console.log(error))


            
    } else {
        image &&
          existsSync("public/img/" + image.filename) &&
          unlinkSync("public/img/" + image.filename);
    
        if (images) {
          images.forEach((image) => {
            existsSync("public/img/" + image) &&
              unlinkSync("public/img/" + image);
          });
        }
      
    
        const products = db.products.findByPk(id, {
            include : ['category','image','colors','sizes']
        })
        const categories = db.category.findAll({
            order: [['name']]
        })
        const colors= db.colors.findAll({
            order: [['name']]
        })
        const sizes= db.sizes.findAll({
            order: [['name']]
        })
            Promise.all([products, categories,colors,sizes])
            .then(([products, categories,colors,sizes]) => {
    
                return res.render('products/product-edit',{
                    ...products.dataValues,
                    categories,
                    colors,
                    sizes,
                    errors : errors.mapped()
                })
            })
            .catch(error => console.log(error))
    
      }
    };
    