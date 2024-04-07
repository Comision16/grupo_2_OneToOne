import React, { useState, useEffect } from 'react';
import { getAllProduct } from '../../../services';


const LastProducts = () => {
  const [lastProduct, setLastProduct] = useState(null);

  useEffect(() => {
    const fetchLastProduct = async () => {
      try {
        const products = await getAllProduct();
        // Obtener el último producto agregado
        const lastProduct = products[products.length - 1];
        setLastProduct(lastProduct);
      } catch (error) {
        console.error('Error fetching último producto agregado:', error);
      }
    };

    fetchLastProduct();
  }, []);
  console.log(lastProduct);
  return (
    <div className="col-lg-6 mb-4">
      {lastProduct && (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Último Producto Agregado</h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img className="img-fluid "  src={`http://localhost:3000/${lastProduct.image}`} style={{ width: "40rem" }}  alt={lastProduct.name} />
            </div>
            <h4>Nombre: {lastProduct.name}</h4>
            <h4>Categoría: {lastProduct.category.name}</h4>
            <h4>Precio: {lastProduct.price}</h4>
            <p>Descripción: {lastProduct.description}</p>
            <a className="btn btn-danger" target="_blank" rel="nofollow" href={lastProduct.detail}>Ver detalle del producto</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default LastProducts;