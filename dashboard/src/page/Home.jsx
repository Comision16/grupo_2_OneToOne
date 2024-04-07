import React, { useEffect, useState } from 'react'
import Metrics from '../components/Home/metrics'
import LastProducts from '../components/Home/lastProducts'
import Category from '../components/Home/Category'
import { getAllProduct } from '../../services'


const Home = () => {

  

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const productos = await getAllProduct();

        // Extraer las categorías únicas de los productos
        const categoriasUnicas = [...new Set(productos.map(producto => producto.category.name))];
        setCategorias(categoriasUnicas);
      } catch (error) {
        console.error('Error fetching categorias:', error);
      }
    };

    fetchCategorias();
  }, []);
  return (
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
    </div>

<Metrics/>
    

    <div className="row">
      <LastProducts/>

       <Category categorias={categorias}/>
    </div>
</div>
  )
}

export default Home
