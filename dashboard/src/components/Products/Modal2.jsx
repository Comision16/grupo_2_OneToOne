import PropTypes from 'prop-types';
import { Button, Col, Modal, Row } from "react-bootstrap";

const Modal2 = ({ show, handleClose, productDetail }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{productDetail.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Nombre :{productDetail.name}</h4>
       <Row>
         <Col sm={12} lg= {4}>
          <img className='img-fluid' src={productDetail.image} alt={productDetail.name} />
         </Col>
         <Col sm={12} lg= {8}>
         <h4>Categoria: {productDetail.category}</h4>
        <h4>Precio: {productDetail.price}</h4>
        <p>Descripcion: {productDetail.description}</p>
         </Col>
       </Row>
        
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    
    </Modal>
  );
};

Modal2.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  productDetail: PropTypes.object.isRequired
};

export default Modal2;