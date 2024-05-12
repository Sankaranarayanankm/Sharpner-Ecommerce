import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";

const dummy = [
  {
    date: "JUL 16",
    stage: "DETROIT,MI",
    place: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    stage: "TORONTO,ON",
    place: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    stage: "BRISTOW, VA",
    place: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    stage: "PHOENIX, AZ",
    place: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    stage: "LAS VEGAS, NV",
    place: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    stage: "CONCORD, CA",
    place: "CONCORD PAVILION",
  },
];
const HomePage = () => {
  return (
    <>
      <Header page="home" />
      <h1 className="text-center">Tours</h1>
      {dummy.map((item) => {
        return (
          <Container className=" m-4">
            <Row>
              <Col className=" text-center d-flex justify-content-between">
                <div className="d-flex ">
                  <p>{item.date} </p>
                  <p>{item.stage} </p>
                  <p>{item.place} </p>
                </div>
                <div>
                  <Button disabled variant="info">
                    Buy Tickets
                  </Button>
                </div>
              </Col>
            </Row>
            <hr />
          </Container>
        );
      })}
      <Footer />
    </>
  );
};

export default HomePage;
