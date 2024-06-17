import { Edit, Plus, Trash } from "lucide-react";
import React from "react";
import { Button, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "./crud/features/Task";

export default function TableCom( {setTask, setUpdateMode, setIndex}) {
  // console.log("-----",setTask)
  
  const data = useSelector((store) => store.taskSlice);

  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    dispatch(deleteTask(index));
  };

  const editHandler = ((e, i) => {
    // console.log("-+-+-+-+-");
    setTask(e);
    setUpdateMode(true);
    setIndex(i);
  });

  return (
    <div className="w-full flex justify-center pt-4">
      <div className="w-1/4 border rounded-lg p-4">
        <h1 className="text-xl font-bold mb-2 flex justify-center items-center">
          CRUD-REDUX LIST
        </h1>

        <hr className="mt-0 w-full h-1 bg-blue-700 mb-4" />

        <ol>
          {data.task.map((e, i) => (
            <li key={i} className="flex justify-between items-center mb-3">
              <Input
                type="text"
                value={i + 1 + ". " + e}
                className="flex-grow border border-gray-300 rounded"
                readOnly
              />
              <div className="flex">
                <Button
                  color="link"
                  className="text-blue-500"
                  onClick={() => editHandler(e, i)}
                >
                  <Edit />
                </Button>
                <Button
                  color="link"
                  className="text-red-500"
                  onClick={() => deleteHandler(i)}
                >
                  <Trash />
                </Button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
