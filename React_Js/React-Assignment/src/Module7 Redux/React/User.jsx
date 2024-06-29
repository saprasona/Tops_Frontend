import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import TableCom from "./TableCom";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "./features/Task";

export default function User() {
  let [task, setTask] = useState({ name: "", price: "", category: "" });
  let [index, setIndex] = useState(null);
  let [updateMode, setUpdateMode] = useState(false);

  const dispatch = useDispatch();

  const addData = () => {
    dispatch(addTask(task));
    setTask({ name: "", price: "", category: "" });
  };

  const updateHandler = () => {
    let data = { index, newData: task };
    dispatch(updateTask(data));
    setTask({ name: "", price: "", category: "" });
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
          name="name"
          placeholder="Enter Name"
          className="w-80 mr-2 h-12 border border-gray-300 rounded"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          onKeyPress={handleKeypress}
        />
        <Input
          type="text"
          name="price"
          placeholder="Enter Price"
          className="w-80 mr-2 h-12 border border-gray-300 rounded"
          value={task.price}
          onChange={(e) => setTask({ ...task, price: e.target.value })}
          onKeyPress={handleKeypress}
        />
        <Input
          type="text"
          name="category"
          placeholder="Enter Category"
          className="w-80 mr-2 h-12 border border-gray-300 rounded"
          value={task.category}
          onChange={(e) => setTask({ ...task, category: e.target.value })}
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
