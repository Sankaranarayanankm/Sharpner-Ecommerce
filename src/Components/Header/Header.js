import React, { useContext } from "react";
import { Nav, Navbar, Container, Button, Row, Col } from "react-bootstrap";
import cartContext from "../../Context/cart-context";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const cartCtx = useContext(cartContext);
  console.log(props);
  const { show } = props;
  const totalItems = cartCtx.items.reduce((curr, item) => {
    console.log(item);
    return curr + item.quantity;
  }, 0);
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="m-auto">
            <NavLink to="/" className="nav-link ml-2">
              HOME{" "}
            </NavLink>
            <NavLink to="/store" className="nav-link ml-2">
              STORE{" "}
            </NavLink>
            <NavLink to="/about" className="nav-link ml-2">
              ABOUT
            </NavLink>
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
              {props.page == "home" && (
                <div>
                  <Button disabled variant="outline-info">
                    Get our Latest Album
                  </Button>
                </div>
              )}
            </h1>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
