import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import TableCom from "./TableCom";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "./crud/features/Task";

export default function User() {
  let [task, setTask] = useState("");
  let [index, setIndex] = useState(null);
  let [updateMode, setUpdateMode] = useState(false);

  const dispatch = useDispatch();
  const addData = () => {
    dispatch(addTask(task));
    setTask("");
  };

  const updateHandler = () => {
    let data = { inedx: index, newData: task };
    dispatch(updateTask(data));
    setTask("");
    setUpdateMode(false);
  };

  const handleKeypress = (event) => {
    if (event.key === "Enter") {
      if (updateMode) {
        updateHandler();
      } else {
        addData();
      }
    }
  };

  return (
    <div className="flex flex-col items-center m-5">
      <div className="flex items-center mb-4">
        <Input
          type="text"
          name="nameInput"
          placeholder="Enter Your Task Here"
          className="w-80 mr-2 h-12 border border-gray-300 rounded"
          value={task}
          onChange={(e) => setTask(e?.target?.value)}
          onKeyPress={handleKeypress}
        />
        {updateMode ? (
          <Button
            color="primary"
            className="bg-blue-500 text-white px-2 py-2 rounded ml-2"
            onClick={updateHandler}
          >
            Update
          </Button>
        ) : (
          <Button
            color="primary"
            className="bg-blue-500 text-white px-2 py-2 rounded ml-2"
            onClick={addData}
          >
            <Plus />
          </Button>
        )}
      </div>
      <TableCom
        setTask={setTask}
        setIndex={setIndex}
        setUpdateMode={setUpdateMode}
      />
    </div>
  );
}
