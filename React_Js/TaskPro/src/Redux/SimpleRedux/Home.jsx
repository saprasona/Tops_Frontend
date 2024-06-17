import React, { useState } from "react";
import DisplayCom from "./DisplayCom";
import IncrementCom from "./IncrementCom";
import DecrementCom from "./DecrementCom";
import MultiplyCom from "./MultiplyCom";
import DecrementAmo from "./DecrementAmo";
import AmountDisplay from "./AmountDisplay";
import IncrementAmo from "./IncrementAmo";
import MultiplyAmo from "./MultiplyAmo";
import { Button } from "flowbite-react";
import { Plus } from "lucide-react";
import { incrementCount, incrementByUser } from "./redux/features/counterSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  let [input, setInput] = useState("");
  console.log("-----------  input----------->", input);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(incrementCount());
  };

  // increment by using input
  const incrementByInput = () => {
    dispatch(incrementByUser(input));
    setInput("");
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center m-9">
        <input
          type="number"
          className="w-[500px] rounded"
          value={input}
          onChange={(e) => setInput(e?.target?.value)}
        />
        <Button
          className="flex flex-row items-center justify-center"
          onClick={incrementByInput}
        >
          <Plus />
        </Button>
      </div>
      <div className="flex items-center justify-center w-full h-full border border-black">
        <div className="flex flex-row justify-center items-center gap-3 m-9 w-full border border-black text-2xl">
          <DisplayCom />
          <IncrementCom />
          <DecrementCom />
          <MultiplyCom />
        </div>
      </div>
      <hr className="border-0 h-1 bg-red-500" />
      <div className="flex items-center justify-center w-full h-full border border-black">
        <div className="flex flex-row justify-center items-center gap-3 m-9 w-full border border-black text-2xl">
          <AmountDisplay />
          <IncrementAmo />
          <DecrementAmo />
          <MultiplyAmo />
        </div>
      </div>
    </>
  );
}
