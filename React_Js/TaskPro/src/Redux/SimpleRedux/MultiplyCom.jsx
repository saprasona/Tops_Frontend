import { Button } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import {multiplyCount } from "./redux/features/counterSlice";

export default function MultiplyCom() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center m-3 w-[200px] h-[200px] border border-green-500 bg-green-300">
      <div className="text-center">
        <h1>MultiplyCom</h1>
        <Button
          className="flex justify-center items-center m-3 w-[120px] bg-green-500"
          onClick={() => dispatch(multiplyCount(2))}
        >
          Mul
        </Button>
      </div>
    </div>
  );
}
