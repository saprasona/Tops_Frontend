import { log } from "async";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Card as ReactCard,
} from "reactstrap";

export default function Cards(props) {
  // console.log("----------->",props)

  return (
    <div className="col">
      <Card
        style={{
          height: "100%", 
          boxShadow: "0 2px 10px",
        }}
      >
        <img
          alt="Sample"
          style={{ maxHeight: "200px", height: "100%", borderRadius: "5px 5px 5px " }}
          src={props?.details?.thumbnail}
        />
        <CardBody>
          <CardTitle tag="h5">{props?.product?.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            $ {props?.details?.price}.00
          </CardSubtitle>
          <CardText>{props?.details?.description}</CardText>
          <Button color="danger">
            Buy
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
