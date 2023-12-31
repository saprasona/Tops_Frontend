import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card Img variant="top" src="holder.js/100px180" />
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button variant="primary">Go somewhere</Button>
      </CardBody>
    </Card>
  );
}

export default BasicExample;