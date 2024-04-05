import { Col, Container, Row,  } from "react-bootstrap";
import TableR from "../components/Products/TableR";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../services";





const Products = () => {

  const [products, setProduct]=useState([]);
 
  useEffect(()=>{

   getAllProduct()
   .then(products => {
    setProduct(products)
   }) .catch(erorr => console.log(erorr))







  }, []);
  return (
    <Container>
        <Row>
          
    
           <Col sm={12} >
          <TableR products={products} />
           </Col>
        </Row>
    </Container>
  )
}

export default Products
