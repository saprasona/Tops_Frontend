import { Button } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { incrementCount } from "../../Redux1Task/SimpleRedux/redux/fetures/countSlice";

export default function IncrermentCo() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center m-5 w-[500px] h-[300px] border border-pink-500">
      <div className="text-center">
        <h1>Increment</h1>
        <Button
          className="flex justify-center items-center m-2 w-[150px]"
          onClick={() => dispatch(incrementCount())}
        >
          Inc-1
        </Button>
      </div>
    </div>
  );
}
