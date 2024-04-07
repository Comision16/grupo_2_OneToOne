import React, { useState, useEffect } from 'react';
import { getAllProduct } from '../../../services';


const UltimosProductos = () => {
  const [totalProductosVendidos, setTotalProductosVendidos] = useState(0);

  useEffect(() => {
    const fetchTotalProductosVendidos = async () => {
      try {
        const productos = await getAllProduct();
      
        const total = productos.length;
        setTotalProductosVendidos(total);
      } catch (error) {
        console.error('Error fetching total de productos vendidos:', error);
      }
    };

    fetchTotalProductosVendidos();
  }, []);

  return (
    <div className="card border-left-success shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Productos en la base de datos</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{totalProductosVendidos}</div>
          </div>
          <div className="col-auto">
            <i className="fas fa-award fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UltimosProductos;