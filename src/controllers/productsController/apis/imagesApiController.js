const db = require("../../../database/models");

const addImageProduct = async (req, res) => {
  try {

    const {id} = req.params;
    if(!id) throw new Error('El ID es obligatorio');

    if(!req.files[0]) throw new Error('Debes subir una imagen');

    const image = req.files[0].filename;

    const newImage = {
        file : image,
        productsId : id
    }

    const imageStore = await db.images.create(newImage)

    return res.status(200).json({
      ok: true,
      msg : 'Imagen guarda con éxito',
      image : imageStore
      
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "hubo un problemita, lo100to ",
    });
  }
};

const removeImageProduct = async (req, res) => {
    try {
  
      const {idImage, idProduct} = req.query;
      if(!idImage) throw new Error('El ID de la imagen es obligatoria');
      if(!idProduct) throw new Error('El ID del producto es obligatorio');

        await db.images.destroy({
            where : {
                id : idImage
            }
        })
    
      return res.status(200).json({
        ok: true,
        msg: 'Imagen eliminada con éxito'
        
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "hubo un problemita, lo100to ",
      });
    }
  };

  const updateImageMainProduct = async (req, res) => {
    try {
  
      const {id} = req.params;
      if(!id) throw new Error('El ID del producto es obligatorio');
  
      if(!req.files[0]) throw new Error('Debes subir una imagen');
  
      const newImage = req.files[0].filename;
  
        await db.products.update(
        {
            image : newImage
        },
        {
            where : {
                id: id
            }
        }
      )

      const {image} = await db.products.findByPk(id)
  
      return res.status(200).json({
        ok: true,
        msg : 'Imagen actualizada con éxito',
        image : image
        
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "hubo un problemita, lo100to ",
      });
    }
  };

module.exports = {
    addImageProduct,
    removeImageProduct,
    updateImageMainProduct
};
