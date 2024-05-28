import React from "react";
import { Button, Offcanvas, Table } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white ",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and black ",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const CartOffCanvas = (props) => {
  const { show, hide, showHandler } = props;

  return (
    <>
      <div className="d-flex align-items-center justify-content-center mb-5">
        <Button
          onClick={showHandler}
          variant="outline-info"
          className="bg-secondary"
        >
          See the Cart
        </Button>
      </div>
      <Offcanvas placement="end" show={show} onHide={hide}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex align-items-center justify-content-center">
            <h1>Cart</h1>
          </div>
          <Table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>

            <tbody>
              {cartElements.map((item) => (
                <tr>
                  <td>
                    <div>
                      <img style={{ width: "50px" }} alt={item.title} src={item.imageUrl} />{" "}
                      {item.title}
                    </div>
                  </td>
                  <td>
                    <div>{item.price}</div>
                  </td>
                  <td>
                    {item.quantity}
                    <Button variant="primary">Danger</Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex align-items-center justify-content-center">
            <Button variant="primary"> PURCHASE</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartOffCanvas;
