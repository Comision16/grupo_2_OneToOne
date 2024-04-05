import { Button, Table } from "react-bootstrap";
import PropTypes from 'prop-types';
import { useState } from "react";
import Modal2 from "./Modal2";
import { getProducts } from "../../../services";

const TableR = ({ products }) => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para almacenar el producto seleccionado

  const handleClose = () => {
    setShowModal(false); // Ocultar el modal
    setSelectedProduct(null); // Restablecer el producto seleccionado
  }

  const handleShow = async (id) => {
    const productDetail = await getProducts(id);
    setSelectedProduct(productDetail); // Establecer el producto seleccionado
    setShowModal(true); // Mostrar el modal
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Funcionalidades</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          const { id } = product;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{product.name}</td>
              <td>{product.category.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <div className="d-flex">
                  <Button variant="primary" className="btn-sm" onClick={() => handleShow(id)} >
                    <i className="fa-solid fa-eye"></i>
                  </Button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
      <Modal2 show={showModal} handleClose={handleClose} products={selectedProduct}/>
    </Table>
  );
};

TableR.propTypes = {
  products: PropTypes.array
};

export default TableR;