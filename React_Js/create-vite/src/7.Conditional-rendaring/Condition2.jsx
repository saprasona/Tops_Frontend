// import React, { useState } from 'react';
// import ClassCom from '../2.Componenets/class/ClassCom';
// import FunctionalCom from '../2.Componenets/functional/FunctionalCom';
// import { Button } from 'reactstrap';

// export default function ConRendaring2() {
//     let[component, setComponent] = useState("class");

//   return (
//     <div className='m-4'>
//       <Button className="me-3" color="danger" onClick={() => setComponent("class")}>Class</Button>
//       <Button className="me-3" color="danger" onClick={() => setComponent("function")}>Function</Button>
//       {component === "class" ? <ClassCom/> : <FunctionalCom/>}
//     </div>
//   );
// }


import React, { useState } from "react";
import ClassCom from "../2.Componenets/class/ClassCom";
import FunctionalCom from "../2.Componenets/functional/FunctionalCom";
import { Button } from "reactstrap";

export default function ConRendaring2() {
  const [component, setComponent] = useState("class");

  return (
    <div className="m-4">
      {component === "class" ? <ClassCom /> : <FunctionalCom />}

      <Button
        className="me-3"
        color="danger"
        onClick={() => setComponent(component === "class" ? "functional" : "class")}>
        {component === "class" ? "Class" : "Function"}
      </Button>
    </div>
  );
}



