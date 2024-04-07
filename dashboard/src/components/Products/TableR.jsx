import { Button, Table } from "react-bootstrap";
import PropTypes from 'prop-types';
import { useState } from "react";
import Modal2 from "./Modal2";
import { getProducts } from "../../../services";
import ModalForm from "./ModalForm";

const TableR = ({ products }) => {
  const [show, setShow] = useState(false); 
  const [productDetail, setProductDetail] = useState({}); 


  const [showForm, setShowForm] = useState(false); 
  const [formValues, setFormValues] = useState({});

  const handleClose = () => setShow(false);
  
  const handleShow = async (id) => {
   
    const product = await getProducts(id);
    console.log(product);
    setProductDetail(product); 
    setShow(true);
  }

  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = async (id) => {
if (id) {
  const product = await getProducts(id);
  setFormValues(product); 
  
}else{
  setShowForm(true);
}

  }





  return (
    <>
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
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <div className="d-flex">
                  <Button variant="primary" className="btn-sm" onClick={() => handleShow(id)} >
                    <i className="fa-solid fa-eye"></i>
                  </Button>
                  <Button variant="success" className="btn-sm" onClick={() => handleShowForm(id)} >
                    <i className="fa-solid fa-pencil"></i>
                  </Button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
      <Modal2 show={show} handleClose={handleClose}  productDetail={productDetail}/>

      <ModalForm show={showForm} handleClose={handleCloseForm}  productDetail={formValues}/>
    </Table>

   
    



</>
  );
};

TableR.propTypes = {
  products: PropTypes.array
};

export default TableR;