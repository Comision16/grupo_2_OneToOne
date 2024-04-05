import PropTypes from 'prop-types';
import { Button, Modal } from "react-bootstrap";

const Modal2 = ({ show, handleClose, productDetail }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>dfsadf</Modal.Title>
      </Modal.Header>
      <Modal.Body>ffs</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
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