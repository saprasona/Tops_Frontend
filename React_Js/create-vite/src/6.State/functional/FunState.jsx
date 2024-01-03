import React, { useState } from "react";
import { Button } from "reactstrap";

export default function FunState() {
  //   arr = [100,"fun"]
  //   let [count,setCount] = arr
  let [count, setCount] = useState(0);
  let [data, setData] = useState({
    amount: 10,
    point: 20,
  });
  console.log("-----------  data----------->", data);

  const incCount = () => {
    // count++;
    setCount(count + 1); // its take some time to change state value
    // console.log(count); // its print old state
  };
  console.log("------>", count); // its print currunt value

  const incPoint = () => {
    setData({ point: data?.point + 1 });
  };

  const incAmount = () => {
    setData({ amount: data?.amount + 1 });
  };

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => incCount()} color="danger">
        Inc Count
      </Button>
      <hr />
      <h1>point is {data?.point}</h1>
      <Button onClick={() => incPoint()} color="danger">
        Inc Point
      </Button>
      <hr />
      <h1>Amount is {data?.amount}</h1>
      <Button onClick={() => incAmount()} color="danger">
        Inc Amount
      </Button>
    </div>
  );
}

/*
let data = {
  point: 0,
  amount: 0,
};

data = data.point + 1; //

// now data is 1

data = { point: data?.point + 1 };
*/
