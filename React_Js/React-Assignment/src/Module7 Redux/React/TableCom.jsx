import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import { Edit, Trash, Eye } from "lucide-react";
import { deleteTask } from "./features/Task";

export default function TableCom({ setTask, setUpdateMode, setIndex }) {
  const [searchTerm, setSearchTerm] = useState("");
  const data = useSelector((store) => store.taskSlice);
  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    dispatch(deleteTask(index));
  };

  const editHandler = (task, index) => {
    setTask(task);
    setUpdateMode(true);
    setIndex(index);
  };

  const readHandler = (task) => {
    alert(`Name: ${task.name}\nPrice: ${task.price}\nCategory: ${task.category}`);
  };

  // Filter tasks based on search term
  const filteredTasks = data.task.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col items-center pt-4">
      {/* Table */}
      <div className="w-3/4 border rounded-lg p-4">
        <h1 className="text-xl font-bold mb-2 flex justify-center items-center">
          REDUX TABLE
        </h1>
        {/* Search input */}
      <div className="w-full mb-3 flex justify-between items-center">
        <Input
          type="text"
          placeholder="Search by name..."
          className="w-1/2 sm:w-1/3 md:w-1/4 p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
        <hr className="mt-0 w-full h-1 bg-blue-700 mb-4" />
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-center">SrNo.</th>
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Category</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{task.name}</td>
                <td className="text-center">{task.price}</td>
                <td className="text-center">{task.category}</td>
                <td className="text-center">
                  <Button
                    color="link"
                    className="text-blue-500"
                    onClick={() => readHandler(task)}
                  >
                    <Eye />
                  </Button>
                  <Button
                    color="link"
                    className="text-blue-500"
                    onClick={() => editHandler(task, index)}
                  >
                    <Edit />
                  </Button>
                  <Button
                    color="link"
                    className="text-red-500"
                    onClick={() => deleteHandler(index)}
                  >
                    <Trash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
