const { validationResult } = require("express-validator");
const fs = require('fs');
const db = require('../../database/models');

module.exports = async (req, res) => {
    const errors = validationResult(req);
    const image = req.files.image;
    const images = req.files.images;
    

    if (errors.isEmpty()) {
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

        const sizesArray = typeof sizes == "string" ? [sizes] : sizes;
        const colorsArray = typeof colors == "string" ? [colors] : colors;


        try {
            const product = await db.products.create({
                name,
                description,
                category,
                price,
                descount,
                image: image ? image[0].filename : null,
                categoryId,
                setionId,
            });


            const sizesDB = sizesArray.map(size => {
                return {
                    sizesId : size,
                    productsId : product.id
                }
            });

            await db.products_sizes.bulkCreate(sizesDB, {
                validate : true
            });

            const colorsDB = colorsArray.map(color => {
                return {
                    colorsId : color,
                    productsId : product.id
                }
            });

            await db.products_colors.bulkCreate(colorsDB, {
                validate : true
            });


            this.images = images ? images.map(image => image.filename) : [];

            if (images) {
                const imagesDB = images.map(image => {
                    return {
                        file: image.filename,
                        productsId: product.id
                    };
                });

                await db.images.bulkCreate(imagesDB, {
                    validate: true
                });

                return res.redirect("/admin");
            } else {
                return res.redirect("/admin");
            }
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error interno del servidor');
        }
    } else {
        try {
            const [categories, colors, sizes] = await Promise.all([
                db.category.findAll({ order: [['name']] }),
                db.colors.findAll({ order: [['name']] }),
                db.sizes.findAll({ order: [['name']] })
            ]);

            return res.render("products/product-add", {
                errors: errors.mapped(),
                old: req.body,
                categories,
                colors,
                sizes
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error interno del servidor');
        }
    }
};