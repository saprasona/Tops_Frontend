import { Plus, Trash, Edit } from "lucide-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InputCom1() {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // to get data from input
  const getData = (ele) => {
    setTask(ele?.target?.value);
  };

  // to add inputed data into array
  const addData = () => {
    if (task.trim() !== "") {
      // Check if the task already exists
      if (!taskArr.some(item => item.trim() === task.trim())) {
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

  // to edit a task
  const editTask = (index) => {
    setEditingIndex(index);
    setTask(taskArr[index]);
  };

  // to save edited task
  const saveEditedTask = (index) => {
    const updatedTasks = [...taskArr];
    updatedTasks[index] = task;
    setTaskArr(updatedTasks);
    setTask("");
    setEditingIndex(null);
  };

  // handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (editingIndex !== null) {
        saveEditedTask(editingIndex);
      } else {
        addData();
      }
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
        {editingIndex !== null ? (
          <Button color="success" className="add-button" onClick={() => saveEditedTask(editingIndex)}>
            Update
          </Button>
        ) : (
          <Button color="danger" className="add-button" onClick={() => addData()}>
            <Plus />
          </Button>
        )}
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
                  {editingIndex === i ? (
                    <Input
                      type="text"
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                    />
                  ) : (
                    <span>{e}</span>
                  )}
                  <div>
                    {editingIndex === i ? (
                      <Button color="link" onClick={() => saveEditedTask(i)}>
                        <i className="fas fa-save"></i>
                      </Button>
                    ) : (
                      <>
                        <Button color="link" onClick={() => editTask(i)}>
                          <Edit />
                        </Button>
                        <Button color="link" onClick={() => deleteTask(i)}>
                          <Trash />
                        </Button>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
