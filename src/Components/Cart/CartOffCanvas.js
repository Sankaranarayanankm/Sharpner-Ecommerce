import React, { useContext } from "react";
import { Button, Offcanvas, Table } from "react-bootstrap";
import cartContext from "../../Context/cart-context";

const CartOffCanvas = (props) => {
  const { show, hide, showHandler } = props;
  const cartCtx = useContext(cartContext);

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

            {cartCtx.items.map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td>
                    <div>
                      <img
                        style={{ width: "50px" }}
                        alt={item.title}
                        src={item.imageUrl}
                      />{" "}
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
              </tbody>
            ))}
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
