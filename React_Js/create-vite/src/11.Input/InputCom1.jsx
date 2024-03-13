import { Plus, Check, Trash } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

export default function InputCom1() {
  const [task, setTask] = useState("");
  const [pendingTask, setPendingTask] = useState([]);
  const [doneTask, setDoneTask] = useState([]);
  const [index, setIndex] = useState(null);
  const [selectedTasks, setSelectedTasks] = useState([]);

  // to get data from input
  const getData = (e) => {
    setTask(e?.target?.value);
  };

  // to add inputted data into array
  const addData = () => {
    if (task !== "") {
      // ... to copy old data
      setPendingTask([...pendingTask, task]);
      // to empty input after adding data
      setTask("");
    } else {
      toast.warn("Please fill some data");
    }
  };

  // handle delete
  const deleteHandler = (array, index) => {
    let filterData = array.filter((_, i) => i !== index);
    array === pendingTask
      ? setPendingTask(filterData)
      : setDoneTask(filterData);
  };

  const verifyTask = (index) => {
    const taskToVerify = pendingTask[index];
    setDoneTask([...doneTask, taskToVerify]);
    deleteHandler(pendingTask, index);
  };

  //back to pending task
  const BackToPending = (index) => {
    const taskToMove = doneTask[index];
    setPendingTask([...pendingTask, taskToMove]);
    deleteHandler(doneTask, index);
  };

  const updateHandler = (data, index) => {
    setTask(data);
    setIndex(index);
  };

  const updateData = () => {
    // Check if the updated task already exists in the array
    if (pendingTask.includes(task)) {
      toast.warn("Duplicate task! Please choose a different task.");
      return;
    }

    // Update data in the array
    pendingTask.splice(index, 1, task);
    setPendingTask([...pendingTask]);
    setTask("");
    setIndex(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };

  const handleCheckboxChange = (e, task) => {
    const checked = e.target.checked;
    if (checked) {
      setSelectedTasks([...selectedTasks, task]);
    } else {
      setSelectedTasks(selectedTasks.filter(selectedTask => selectedTask !== task));
    }
    if (selectedTasks.length === 1) {
      console.log("Selected Tasks:", selectedTasks[0], task);
    }
  };

  return (
    <div className="d-flex flex-column align-content-center m-5">
      {/* <h1>index : {index}</h1> */}
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
          <h1>Pending Task</h1>
          <hr
            style={{
              marginTop: "0",
              width: "100%",
              height: "5px",
              backgroundColor: "darkgray",
            }}
          />
          <div className="p-3 pt-0">
            {pendingTask.map((e, i) => {
              return (
                
                <div className="d-flex justify-content-between m-2" key={i}>
                  <input
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(e, e.target.value)}
                      value={e}
                    />
                  <li>
                    {i + 1}. {e}
                  </li>
                  <div className="d-flex gap-2">
                    
                    <Check
                      color="green"
                      role="button"
                      onClick={() => verifyTask(i)}
                    />
                    <Trash
                      color="red"
                      role="button"
                      onClick={() => deleteHandler(pendingTask, i)}
                    />
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-25 border rounded-2">
          <h1>Done Task</h1>
          <hr
            style={{
              marginTop: "0",
              width: "100%",
              height: "5px",
              backgroundColor: "darkgray",
            }}
          />
          <div className="p-3 pt-0">
            {doneTask.map((e, i) => {
              return (
                <div className="d-flex justify-content-between m-2" key={i}>
                  <li>
                    {i + 1}. {e}
                  </li>
                  <div className="d-flex gap-2">
                    <Check
                      color="green"
                      role="button"
                      onClick={() => BackToPending(i)}
                    />

                    <Trash
                      color="red"
                      role="button"
                      onClick={() => deleteHandler(doneTask, i)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
