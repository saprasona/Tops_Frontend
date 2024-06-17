import { Button } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { incrementAmount } from "./redux/features/amountSlice";

export default function IncrementAmo() {
  const dispatch = useDispatch();

//   const incrementHandler = () =>{
//     dispatch(incrementAmount());
//   }

  return (
    <div className="flex flex-col justify-center items-center m-3 w-[200px] h-[200px] border border-pink-500 bg-pink-300">
      <div className="text-center">
        <h1>IncrementAmo</h1>
        <Button
          className="flex justify-center items-center m-3 w-[120px] bg-pink-500"
          onClick={() => dispatch(incrementAmount())}
        //   onClick={()=> incrementHandler()}
        >
          IncAmo-1
        </Button>
      </div>
    </div>
  );
}
