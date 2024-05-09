import React, { useContext } from "react";
import { Nav, Navbar, Container, Button, Row, Col } from "react-bootstrap";
import cartContext from "../../Context/cart-context";
// import Container from 'react-bootstrap';

const Header = (props) => {
  const cartCtx=useContext(cartContext);
  const { show } = props;
  const totalItems=cartCtx.items.reduce((curr,item)=>{
    console.log(item)
    return curr+item.quantity;
  },0);
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button onClick={show} variant="outline-primary">
            Cart {totalItems}
          </Button>
        </Container>
      </Navbar>
      <Container fluid>
        <Row className="justify-content-center ">
          <Col className="text-center">
            <h1 className="mt-1 p-5  font-weight-bold bg-secondary">
              The Generics
            </h1>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
