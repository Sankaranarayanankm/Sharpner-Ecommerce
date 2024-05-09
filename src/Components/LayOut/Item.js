import React, { useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Item.css";
import cartContext from "../../Context/cart-context";

const Item = (props) => {
  const cartCtx = useContext(cartContext);
  const { title, price, imageUrl } = props;
  const addItemToCart = (item) => {
    cartCtx.addToCart(item);
  };
 
 
  return (
    <Col md={6} className="d-flex align-items-center justify-content-center">
      <Card className="m-4 shadow hide-overflow " style={{ width: "18rem" }}>
        <Card.Img className="hover-zoom" variant="top" src={imageUrl} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex justify-content-between mt-3">
            <Card.Text>${price}</Card.Text>
            <Button variant="primary" onClick={()=>addItemToCart(props)}>
              ADD TO CART
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
