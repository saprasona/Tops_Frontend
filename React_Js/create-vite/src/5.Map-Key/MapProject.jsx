// import React from "react";
// import Card from "./Card";
// import Data from "./data.json";

// export default function MapProject() {
//   console.log("-----------  Data----------->", Data);
//   // store data into state and then use state not data directly
//   return (
//     <>
//       <h1>PRODUCTS</h1>
//       <hr />
//       <div className="d-flex gap-3 m-4 flex-wrap">
//         {Data?.map?.((e, i) => {
//           return (
//             <>
//               <Card product={e} key={e?._id} />
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";
import Card from "./Card";
import Data from "./data.json";

export default function MapProject() {
  const [products, setProducts] = useState(Data);

  console.log("-----------  products----------->", products);

  return (
    <>
      <h1>PRODUCTS</h1>
      <hr />
      <div className="d-grid grid-4">
        {products.map((e) => (
          <Card product={e} key={e._id} />
        ))}
      </div>
    </>
  );
}
