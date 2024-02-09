// import { Plus, Trash } from "lucide-react";
// import React, { useState } from "react";
// import { Button, Input } from "reactstrap";

// export default function InputCom() {
//   const [task, setTask] = useState("");
//   const [taskArr, setTaskArr] = useState([]);

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

//   // to delete a task using filter
//   const deleteTask = (index) => {
//     const updatedTasks = taskArr.filter((_, i) => i !== index);
//     setTaskArr(updatedTasks);
//   };

//   // handle Enter key press
//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       addData();
//     }
//   };

//   return (
//     <div className="input-container">
//       <div className="task-section">
//         <Input
//           name="nameInput"
//           className="task-input"
//           placeholder="Enter Your Task Here"
//           onChange={(e) => getData(e)}
//           onKeyPress={handleKeyPress}
//           value={task}
//         />
//         <Button
//           color="danger"
//           className="add-button"
//           onClick={() => addData()}
//         >
//           <Plus />
//         </Button>
//       </div>
//       <div className="task-list">
//         <ol>
//           {taskArr.map((e, i) => (
//             <li key={i}>
//               <span className="task-number">{i + 1}</span>
//               {e}
//               <Button color="link" onClick={() => deleteTask(i)}>
//                 <Trash />
//               </Button>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// }

// import { Plus, Trash } from "lucide-react";
// import React, { useState } from "react";
// import { Button, Input } from "reactstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function InputCom() {
//   const [task, setTask] = useState("");
//   const [taskArr, setTaskArr] = useState([]);

//   // to get data from input
//   const getData = (ele) => {
//     setTask(ele?.target?.value);
//   };

//   // to add inputed data into array
//   const addData = () => {
//     if (task.trim() !== "") {
//       // Check if the task already exists
//       if (!taskArr.includes(task)) {
//         // ... to copy old data
//         setTaskArr([...taskArr, task]);
//         // to empty input after adding data
//         setTask("");
//       } else {
//         toast.warn("Task already exists!");
//       }
//     } else {
//       toast.warn("Please enter a task!");
//     }
//   };

//   // to delete a task using filter
//   const deleteTask = (index) => {
//     const updatedTasks = taskArr.filter((_, i) => i !== index);
//     setTaskArr(updatedTasks);
//   };

//   // handle Enter key press
//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       addData();
//     }
//   };

//   return (
//     <div className="input-container">
//       <div className="task-section d-flex align-items-center">
//         <Input
//           type="text"
//           name="nameInput"
//           placeholder="Enter Your Task Here"
//           onChange={(e) => getData(e)}
//           onKeyPress={handleKeyPress}
//           value={task}
//           style={{ width: "500px", marginRight: "8px", height:"45px" }}
//         />
//         <Button color="danger" className="add-button" onClick={() => addData()}>
//           <Plus />
//         </Button>
//       </div>
//       <div className="w-100 d-flex justify-content-center pt-4">
//         <div className="w-25 border rounded-2">
//           <h1 className="todo">TODO LIST</h1>
//           <hr
//             style={{
//               marginTop: "0",
//               width: "100%",
//               height: "5px",
//               backgroundColor: "plum",
//             }}
//           />
//           {taskArr.length > 0 ? (
//             <ol>
//               {taskArr.map((e, i) => (
//                 <li
//                   key={i}
//                   className="d-flex justify-content-between m-3"
//                   style={{
//                     borderBottom:
//                       i < taskArr.length - 1 ? "1px solid plum" : "none",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span className="task-number">{i + 1}</span>
//                   {e}
//                   <Button color="link" onClick={() => deleteTask(i)}>
//                     <Trash />
//                   </Button>
//                 </li>
//               ))}
//             </ol>
//           ) : (
//             <p className="text-center">No tasks added yet!</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { Plus, Trash } from "lucide-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InputCom() {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);

  // to get data from input
  const getData = (ele) => {
    setTask(ele?.target?.value);
  };

  // to add inputed data into array
  const addData = () => {
    if (task.trim() !== "") {
      // Check if the task already exists
      if (!taskArr.includes(task)) {
        // ... to copy old data
        setTaskArr([...taskArr, task]);
        // to empty input after adding data
        setTask("");
      } else {
        toast.warn("Task already exists!");
      }
    } else {
      toast.warn("Please enter a task!");
    }
  };

  // to delete a task using filter
  const deleteTask = (index) => {
    const updatedTasks = taskArr.filter((_, i) => i !== index);
    setTaskArr(updatedTasks);
  };

  // handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addData();
    }
  };

  return (
    <div className="input-container">
      <div className="task-section d-flex align-items-center">
        <Input
          type="text"
          name="nameInput"
          placeholder="Enter Your Task Here"
          onChange={(e) => getData(e)}
          onKeyPress={handleKeyPress}
          value={task}
          style={{ width: "500px", marginRight: "8px", height: "45px" }}
        />
        <Button color="danger" className="add-button" onClick={() => addData()}>
          <Plus />
        </Button>
      </div>
      <div className="w-100 d-flex justify-content-center pt-4">
        <div className="w-25 border rounded-2">
          <h1 className="todo">TODO LIST</h1>
          <hr
            style={{
              marginTop: "0",
              width: "100%",
              height: "5px",
              backgroundColor: "plum",
            }}
          />
          {taskArr.length > 0 && (
            <ol>
              {taskArr.map((e, i) => (
                <li
                  key={i}
                  className="d-flex justify-content-between m-3"
                  style={{
                    borderBottom:
                      i < taskArr.length - 1 ? "1px solid plum" : "none",
                    alignItems: "center",
                  }}
                >
                  <span className="task-number">{i + 1}</span>
                  {e}
                  <Button color="link" onClick={() => deleteTask(i)}>
                    <Trash />
                  </Button>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}