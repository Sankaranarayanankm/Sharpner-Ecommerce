import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Button, Form } from "react-bootstrap";

const ContactUS = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData((item) => {
      return {
        ...item,
        [name]: value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const postData = async () => {
      const response = await fetch(
        "https://react-sharpner-default-rtdb.firebaseio.com/node.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) throw new Error("Failed to post data");
    };
    try {
      postData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Form onSubmit={submitHandler} className="m-5">
        <Form.Group className="mb-3">
          <Form.Label>Name </Form.Label>
          <Form.Control
            name="name"
            onChange={changeHandler}
            value={data.name}
            type="text"
            placeholder="Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={changeHandler}
            value={data.email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="number"
            onChange={changeHandler}
            value={data.number}
            type="number"
            placeholder="Phone Number"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Footer />
    </>
  );
};

export default ContactUS;
