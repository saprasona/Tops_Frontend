import React, { useState } from "react";
import { Button } from "reactstrap";

export default function ConRendaring() {
  let [count, setCount] = useState(1);
  let [showPass, setShowPass] = useState(false);

  return (
    <div>
      <h1> Count is = {count} </h1>
      {count % 2 === 1 ? <h1>{count} is odd</h1> : <h1>{count} is even</h1>};
      <Button color="danger" onClick={() => setCount(count + 1)}>
        Inc
      </Button>
      <hr />
      {showPass && <h1>PassWord is show</h1>}
      <div className="d-flex justify-content-center gap-3">
        <input className="w-25" type={showPass ? "text" : "password"} />
        {showPass ? (
          <Button color="danger" onClick={() => setShowPass(false)}>
            Hide Password
          </Button>
        ) : (
          <Button color="danger" onClick={() => setShowPass(true)}>
            Show Password
          </Button>
        )}
      </div>
      <hr />
    </div>
  );
}
