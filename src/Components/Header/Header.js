import React, { useContext } from "react";
import { Nav, Navbar, Container, Button, Row, Col } from "react-bootstrap";
import cartContext from "../../Context/cart-context";
import { NavLink } from "react-router-dom";
import { authContext } from "../../Context/AuthContextProvider";

const Header = (props) => {
  const cartCtx = useContext(cartContext);
  const authCtx = useContext(authContext);
  const { show } = props;
  const totalItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.quantity;
  }, 0);
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="m-auto">
            <NavLink
              exact
              activeClassName="active"
              to="/"
              className="nav-link ml-2"
            >
              HOME{" "}
            </NavLink>
            {authCtx.isLogin && (
              <NavLink
                to="/store"
                activeClassName="active"
                className="nav-link ml-2"
              >
                STORE{" "}
              </NavLink>
            )}
            <NavLink
              to="/about"
              activeClassName="active"
              className="nav-link ml-2"
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="nav-link ml-2"
            >
              CONTACT US
            </NavLink>
            {!authCtx.isLogin && (
              <NavLink
                to="/login"
                activeClassName="active"
                className="nav-link ml-2"
              >
                LOGIN
              </NavLink>
            )}
          </Nav>
          {authCtx.isLogin && (
            <Button className="m-1" variant="info" onClick={authCtx.logout}>
              Logout
            </Button>
          )}
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
              {props.page === "home" && (
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
