// import { Plus } from "lucide-react";
// import React, { useState } from "react";
// import { Button, Input } from "reactstrap";

// export default function InputCom() {
//   let [task, setTask] = useState("");
//   let [taskArr, setTaskArr] = useState([]);

//   // to get data from input
//   const getData = (ele) => {
//     setTask(ele?.target?.value);
//   };

//   // to add inputed data into array
//   const addData = () => {
//     // ... to copy old data
//     setTaskArr([...taskArr, task]);
//     // to empty input after adding data
//     setTask("");
//   };

//   return (
//     <div className="d-flex flex-column align-content-center">
//       <h1>task is {task}</h1>
//       <div className="w-100 d-flex   justify-content-center ">
//         <Input
//           name="nameInput"
//           className="w-25 rounded-end-0 "
//           placeholder="Enter Your Task Here"
//           onChange={(e) => getData(e)}
//           // we take task in value to controll input value
//           value={task}
//         />
//         <Button
//           color="danger"
//           className="rounded-start-0"
//           onClick={() => addData()}
//         >
//           <Plus />
//         </Button>
//       </div>
//       <div className="w-100 d-flex justify-content-center ">
//         <ol className="w-25 mt-4 border p-3">
//           {taskArr.map((e, i) => {
//             return (
//               <>
//                 <li key={i}>{e}</li> <hr />
//               </>
//             );
//           })}
//         </ol>
//       </div>
//     </div>
//   );
// }

// import { Plus, Trash } from "lucide-react";
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { Button, Input } from "reactstrap";

// export default function InputCom() {
//   let [task, setTask] = useState("");
//   let [taskArr, setTaskArr] = useState([]);

//   // to get data from input
//   const getData = (ele) => {
//     setTask(ele?.target?.value);
//   };

//   // to add inputed data into array
//   const addData = () => {
//     if (task !== "") {
//       // ... to copy old data
//       setTaskArr([...taskArr, task]);
//       // to empty input after adding data
//       setTask("");
//     } else {
//       toast.warn("Please fill some data");
//     }
//   };

//   // handle delete
//   const deleteHandler = (index) => {
//     console.log("----->", index);
//     let filterData = taskArr.filter((e, i) => i !== index);
//     console.log("-----------  filterData----------->", filterData);
//     setTaskArr(filterData);
//   };

//   return (
//     <div className="d-flex flex-column align-content-center">
//       {/* <h1>task is {task}</h1> */}
//       <div className="w-100 d-flex   justify-content-center ">
//         <Input
//           name="nameInput"
//           className="w-25 rounded-end-0 "
//           placeholder="Enter Your Task Here"
//           onChange={(e) => getData(e)}
//           // we take task in value to controll input value
//           value={task}
//         />
//         <Button
//           color="danger"
//           className="rounded-start-0"
//           onClick={() => addData()}
//         >
//           <Plus />
//         </Button>
//       </div>
//       <div className="w-100 d-flex justify-content-center pt-4">
//         <div className="w-25 border rounded-2">
//           <h1>TODO List</h1>
//           <hr
//             style={{
//               marginTop: "0",
//               width: "100%",
//               height: "5px",
//               backgroundColor: "darkgray",
//             }}
//           />
//           <div className="p-3 pt-0">
//             {taskArr.map((e, i) => {
//               return (
//                 <>
//                   <div className="d-flex justify-content-between m-2">
//                     <li key={i}>
//                       {i + 1}. {e}{" "}
//                     </li>
//                     <Trash
//                       color="red"
//                       role="button"
//                       onClick={() => deleteHandler(i)}
//                     />
//                   </div>
//                   <hr />
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/*
let arr = [a,b,c,d]
let  index = 2


let filterData = arr.filter((e,i)=> i!==index)

 filterData = [a,b,d]
 arr = filterData

 arr ?  => [a,b,d]


*/

// import { Edit, Plus, Trash } from "lucide-react";
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { Button, Input } from "reactstrap";

// export default function InputCom() {
//   let [task, setTask] = useState("");
//   let [taskArr, setTaskArr] = useState([]);
//   let [index, setIndex] = useState(null);

//   // to get data from input
//   const getData = (ele) => {
//     setTask(ele?.target?.value);
//   };

//   // to add inputed data into array
//   const addData = () => {
//     if (task !== "") {
//       // ... to copy old data
//       setTaskArr([...taskArr, task]);
//       // to empty input after adding data
//       setTask("");
//     } else {
//       toast.warn("Please fill some data");
//     }
//   };

//   // handle delete
//   const deleteHandler = (index) => {
//     let filterData = taskArr.filter((e, i) => i !== index);
//     setTaskArr(filterData);
//   };

//   const updateHandler = (data, index) => {
//     setTask(data);
//     setIndex(index);
//   };

//   const updateData = () => {
//     // newData=task , array=taskArr , index=index
//     taskArr.splice(index, 1, task);
//     setTask([...taskArr]);
//     setTask("");
//     setIndex(null);
//   };
//   return (
//     <div className="d-flex flex-column align-content-center">
//       <h1>index : {index}</h1>
//       <div className="w-100 d-flex   justify-content-center ">
//         <Input
//           name="nameInput"
//           className="w-25 rounded-end-0 "
//           placeholder="Enter Your Task Here"
//           onChange={(e) => getData(e)}
//           // we take task in value to controll input value
//           value={task}
//         />
//         {/* index => null/0/undfinde/false */}
//         {index || index === 0 ? (
//           <Button
//             color="danger"
//             className="rounded-start-0"
//             onClick={() => updateData()}
//           >
//             Update
//           </Button>
//         ) : (
//           <Button
//             color="danger"
//             className="rounded-start-0"
//             onClick={() => addData()}
//           >
//             <Plus />
//           </Button>
//         )}
//       </div>
//       <div className="w-100 d-flex justify-content-center pt-4">
//         <div className="w-25 border rounded-2">
//           <h1>TODO List</h1>
//           <hr
//             style={{
//               marginTop: "0",
//               width: "100%",
//               height: "5px",
//               backgroundColor: "darkgray",
//             }}
//           />
//           <div className="p-3 pt-0">
//             {taskArr.map((e, i) => {
//               return (
//                 <>
//                   <div className="d-flex justify-content-between m-2">
//                     <li key={i}>
//                       {i + 1}. {e}
//                     </li>
//                     <div className="d-flex gap-2">
//                       <Edit
//                         color="#8fb5f2"
//                         role="button"
//                         onClick={() => updateHandler(e, i)}
//                       />
//                       <Trash
//                         color="red"
//                         role="button"
//                         onClick={() => deleteHandler(i)}
//                       />
//                     </div>
//                   </div>
//                   <hr />
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Edit, Plus, Trash } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

export default function InputCom() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  let [index, setIndex] = useState(null);

  // to get data from input
  const getData = (e) => {
    setTask(e?.target?.value);
  };

  // to add inputed data into array
  const addData = () => {
    if (task !== "") {
      // ... to copy old data
      setTaskArr([...taskArr, task]);
      // to empty input after adding data
      setTask("");
    } else {
      toast.warn("Please fill some data");
    }
  };

  // handle delete
  const deleteHandler = (index) => {
    let filterData = taskArr.filter((e, i) => i !== index);
    setTaskArr(filterData);
  };

  const updateHandler = (data, index) => {
    setTask(data);
    setIndex(index);
  };

  const updateData = () => {
    // Check if the updated task already exists in the array
    if (taskArr.includes(task)) {
      toast.warn("Duplicate task! Please choose a different task.");
      return;
    }

    // Update data in the array
    taskArr.splice(index, 1, task);
    setTaskArr([...taskArr]);
    setTask("");
    setIndex(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };

  return (
    <div className="d-flex flex-column align-content-center">
      <h1>index : {index}</h1>
      <div className="w-100 d-flex   justify-content-center ">
        <Input
          name="nameInput"
          className="w-25 rounded-end-0 "
          placeholder="Enter Your Task Here"
          onChange={(e) => getData(e)}
          onKeyPress={(e) => handleKeyPress(e)} // Add event listener for Enter key
          // we take task in value to control input value
          value={task}
        />
        {/* index => null/0/undfinde/false */}
        {index || index === 0 ? (
          <Button
            color="danger"
            className="rounded-start-0"
            onClick={() => updateData()}
          >
            Update
          </Button>
        ) : (
          <Button
            color="danger"
            className="rounded-start-0"
            onClick={() => addData()}
          >
            <Plus />
          </Button>
        )}
      </div>
      <div className="w-100 d-flex justify-content-center pt-4">
        <div className="w-25 border rounded-2">
          <h1>TODO List</h1>
          <hr
            style={{
              marginTop: "0",
              width: "100%",
              height: "5px",
              backgroundColor: "darkgray",
            }}
          />
          <div className="p-3 pt-0">
            {taskArr.map((e, i) => {
              return (
                <>
                  <div className="d-flex justify-content-between m-2">
                    <li key={i}>
                      {i + 1}. {e}
                    </li>
                    <div className="d-flex gap-2">
                      <Edit
                        color="#8fb5f2"
                        role="button"
                        onClick={() => updateHandler(e, i)}
                      />
                      <Trash
                        color="red"
                        role="button"
                        onClick={() => deleteHandler(i)}
                      />
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
