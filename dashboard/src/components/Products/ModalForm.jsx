import PropTypes from "prop-types";
import { Button, Form, Modal } from 'react-bootstrap'

const ModalForm = ({show, handleClose, productDetail}) => {
  // Valores predeterminados para evitar errores si productDetail es null o undefined
  const { name = '', description = '', price = '' } = productDetail;
  console.log(productDetail);
  return (
    
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del producto"
              value={name}
            />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="descripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descripción del producto"
              value={description}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="precio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Precio del producto"
              value={price}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalForm.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  productDetail: PropTypes.object
};

export default ModalForm;