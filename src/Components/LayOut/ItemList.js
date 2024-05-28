import React from "react";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";
const productsArr = [
  {
    title: "Colors",
    id: 1,
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    id: 2,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    id: 3,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    id: 4,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ItemList = () => {
  const items = productsArr.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
    />
  ));
  return (
    <Container className="mt-5">
      <h1 className="d-flex align-items-center justify-content-center mb-5">
        Colors
      </h1>
      <Row>{items}</Row>
      
    </Container>
  );
};

export default ItemList;
