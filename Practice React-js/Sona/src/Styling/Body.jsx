import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import body from "./body.css";

const Body = () => {
  return (
    <body className="border border-dark rounded-4 m-4 p-4 w-100 text-danger d-flex align-content-center justify-content-center flex-column ">
    <Card style={{ width: '34rem' }}
    className="justify-content-center">
           <img alt="Sample" src="https://pic4.zhimg.com/v2-ad156ede0510d1652f6fe73e72cb38a5_1440w.jpg?source=172ae18b" />
      <Card/>
      <CardBody>
        <CardTitle className="card-title" >CARD TITLE</CardTitle>
        <CardText className="ct">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button className="w-100" color="danger">Go somewhere</Button>
      </CardBody>
    </Card>
    </body>
  );
};

export default Body;