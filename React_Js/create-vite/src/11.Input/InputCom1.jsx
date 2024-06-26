import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";
import { Plus, Check, Edit, Trash } from "lucide-react";
import swal from "sweetalert";

export default function InputCom2() {
  const [task, setTask] = useState("");
  const [pendingTask, setPendingTask] = useState([]);
  const [doneTask, setDoneTask] = useState([]);
  const [index, setIndex] = useState(null);
  const [selectedPendingTasks, setSelectedPendingTasks] = useState([]);
  const [selectedDoneTasks, setSelectedDoneTasks] = useState([]);
  const [selectAllPending, setSelectAllPending] = useState(false);
  const [selectAllDone, setSelectAllDone] = useState(false);
  const [searchQueryPending, setSearchQueryPending] = useState("");
  const [searchQueryDone, setSearchQueryDone] = useState("");

  useEffect(() => {
    const storedPendingTasks = JSON.parse(localStorage.getItem("pendingTasks")) || [];
    const storedDoneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];
    setPendingTask(storedPendingTasks);
    setDoneTask(storedDoneTasks);
    setSelectedPendingTasks([]);
    setSelectedDoneTasks([]);
  }, []);

  const getData = (e) => {
    setTask(e.target.value);
  };

  const addData = () => {
    if (task.trim() !== "") {
      if (pendingTask.includes(task)) {
        toast.warn("Task already exists! Please enter a different task.");
      } else {
        setPendingTask([...pendingTask, task]);
        localStorage.setItem("pendingTasks", JSON.stringify([...pendingTask, task]));
        setTask("");
      }
    } else {
      toast.warn("Please fill some data");
    }
  };

  const deletePendingTask = (index) => {
    const filteredData = pendingTask.filter((_, i) => i !== index);
    setPendingTask(filteredData);
    localStorage.setItem("pendingTasks", JSON.stringify(filteredData));
  };

  const deleteDoneTask = (index) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this task!",
      icon: "warning",
      buttons: ["No, cancel", "Yes, delete it"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const filteredData = doneTask.filter((_, i) => i !== index);
        setDoneTask(filteredData);
        swal("Deleted!", "Your task has been deleted.", "success");
        localStorage.setItem("doneTasks", JSON.stringify(filteredData));
      } else {
        swal("Cancelled", "Your task is safe!", "info");
      }
    });
  };

  const verifyTask = (index) => {
    const taskToVerify = pendingTask[index];
    setDoneTask([...doneTask, taskToVerify]);
    deletePendingTask(index);
    localStorage.setItem("doneTasks", JSON.stringify([...doneTask, taskToVerify]));
  };

  const BackToPending = (index) => {
    const taskToMove = doneTask[index];
    setPendingTask([...pendingTask, taskToMove]);
    const filteredData = doneTask.filter((_, i) => i !== index);
    setDoneTask(filteredData);
    localStorage.setItem("pendingTasks", JSON.stringify([...pendingTask, taskToMove]));
    localStorage.setItem("doneTasks", JSON.stringify(filteredData));
  };

  const editTask = (index) => {
    setTask(pendingTask[index]);
    setIndex(index);
  };

  const updateData = () => {
    if (pendingTask.includes(task)) {
      toast.warn("Duplicate task! Please choose a different task.");
      return;
    }

    const updatedPendingTask = pendingTask.map((t, i) =>
      i === index ? task : t
    );
    setPendingTask(updatedPendingTask);
    localStorage.setItem("pendingTasks", JSON.stringify(updatedPendingTask));
    setTask("");
    setIndex(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };

  const handleCheckboxChange = (e, index, type) => {
    const checked = e.target.checked;
    if (type === "pending") {
      if (checked) {
        setSelectedPendingTasks([...selectedPendingTasks, index]);
      } else {
        setSelectedPendingTasks(
          selectedPendingTasks.filter((selectedIndex) => selectedIndex !== index)
        );
      }
    } else if (type === "done") {
      if (checked) {
        setSelectedDoneTasks([...selectedDoneTasks, index]);
      } else {
        setSelectedDoneTasks(
          selectedDoneTasks.filter((selectedIndex) => selectedIndex !== index)
        );
      }
    }
  };

  const handleSelectAll = (type) => {
    if (type === "pending") {
      if (!selectAllPending) {
        const allPendingIndices = [...Array(pendingTask.length).keys()];
        setSelectedPendingTasks(allPendingIndices);
      } else {
        setSelectedPendingTasks([]);
      }
      setSelectAllPending(!selectAllPending);
    } else if (type === "done") {
      if (!selectAllDone) {
        const allDoneIndices = [...Array(doneTask.length).keys()];
        setSelectedDoneTasks(allDoneIndices);
      } else {
        setSelectedDoneTasks([]);
      }
      setSelectAllDone(!selectAllDone);
    }
  };

  const moveToPendingTask = () => {
    const selectedTasks = selectedDoneTasks.map((index) => doneTask[index]);
    let updatedDoneTasks = doneTask.filter((_, i) => {
      return !selectedDoneTasks.includes(i);
    });
    setPendingTask([...pendingTask, ...selectedTasks]);
    setDoneTask(updatedDoneTasks);
    localStorage.setItem("pendingTasks", JSON.stringify([...pendingTask, ...selectedTasks]));
    localStorage.setItem("doneTasks", JSON.stringify(updatedDoneTasks));
    setSelectedDoneTasks([]);
  };

  const moveToDoneTask = () => {
    const selectedTasks = selectedPendingTasks.map((index) => pendingTask[index]);
    let updatedPendingTasks = pendingTask.filter((_, i) => {
      return !selectedPendingTasks.includes(i);
    });
    setDoneTask([...doneTask, ...selectedTasks]);
    setPendingTask(updatedPendingTasks);
    localStorage.setItem("doneTasks", JSON.stringify([...doneTask, ...selectedTasks]));
    localStorage.setItem("pendingTasks", JSON.stringify(updatedPendingTasks));
    setSelectedPendingTasks([]);
  };

  const handleAllMoveToPending = () => {
    swal({
      title: "Are you sure?",
      text: "Once moved, all done tasks will be moved to pending tasks!",
      icon: "warning",
      buttons: ["No, cancel", "Yes, move all"],
      dangerMode: false,
    }).then((willMove) => {
      if (willMove) {
        moveToPendingTask();
        swal("Moved!", "All done tasks have been moved to pending.", "success");
      } else {
        swal("Cancelled", "No tasks were moved.", "info");
      }
    });
  };

  const handleAllMoveToDone = () => {
    if (pendingTask.length === 0) {
      swal(
        "No pending tasks",
        "There are no pending tasks to move to done.",
        "info"
      );
      return;
    }

    swal({
      title: "Are you sure?",
      text: "Once moved, all pending tasks will be moved to done tasks!",
      icon: "warning",
      buttons: ["No, cancel", "Yes, move all"],
      dangerMode: false,
    }).then((willMove) => {
      if (willMove) {
        const allPendingTasks = [...pendingTask];
        setDoneTask([...doneTask, ...allPendingTasks]);
        setPendingTask([]);
        localStorage.setItem("doneTasks", JSON.stringify([...doneTask, ...allPendingTasks]));
        localStorage.setItem("pendingTasks", JSON.stringify([]));
        swal("Moved!", "All pending tasks have been moved to done.", "success");
      } else {
        swal("Cancelled", "No tasks were moved.", "info");
      }
    });
  };

  const deleteAllDoneTasks = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover these tasks!",
      icon: "warning",
      buttons: ["No, cancel", "Yes, delete all"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setDoneTask([]);
        localStorage.removeItem("doneTasks");
        swal("Deleted!", "All done tasks have been deleted.", "success");
      } else {
        swal("Cancelled", "Your tasks are safe!", "info");
      }
    });
  };

  const filteredPendingTasks = pendingTask.filter((task) =>
    task.toLowerCase().includes(searchQueryPending.toLowerCase())
  );

  const searchData = () => {
    const allData = JSON.parse(localStorage.getItem("doneTasks") || "[]");
    setDoneTask(allData.filter((e) => e.includes(searchQueryDone)));
  };

  const searchHandler = (e) => {
    setSearchQueryDone(e?.target?.value);
    if (e?.target?.value?.length === 0) {
      const allData = JSON.parse(localStorage.getItem("doneTasks") || "[]");
      setDoneTask(allData);
    }
  };

  return (
    <div className="d-flex flex-column align-content-center m-5">
      <div className="w-100 d-flex justify-content-center ">
        <Input
          name="nameInput"
          className="w-25 rounded-end-0 "
          placeholder="Enter Your Task Here"
          onChange={(e) => getData(e)}
          onKeyPress={(e) => handleKeyPress(e)}
          value={task}
        />
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
          <Input
            className="mb-2"
            placeholder="Search Pending Tasks"
            onChange={(e) => setSearchQueryPending(e.target.value)}
            value={searchQueryPending}
          />
          <h6 className="spanSelect">
            <input
              style={{
                marginTop: "5px",
              }}
              type="checkbox"
              onChange={() => handleSelectAll("pending")}
              checked={selectAllPending}
            />{" "}
            <span className="ms-1">Select All </span>
          </h6>
          <hr
            style={{
              marginTop: "0",
              width: "100%",
              backgroundColor: "darkgray",
            }}
          />
          <div className="p-3 pt-0">
            {filteredPendingTasks.map((e, i) => {
              const originalIndex = pendingTask.indexOf(e);
              return (
                <div className="d-flex justify-content-between m-2" key={i}>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleCheckboxChange(e, originalIndex, "pending")
                    }
                    checked={selectedPendingTasks.includes(originalIndex)}
                    value={e}
                  />
                  <li>
                    {originalIndex + 1}. {e}
                  </li>
                  <div className="d-flex gap-2">
                    <Check
                      color="green"
                      role="button"
                      onClick={() => verifyTask(originalIndex)}
                    />
                    <Edit
                      color="blue"
                      role="button"
                      onClick={() => editTask(originalIndex)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <Button
            style={{
              width: "100%",
            }}
            color="success"
            className="mt-2"
            onClick={moveToDoneTask}
            disabled={selectedPendingTasks.length === 0}
          >
            Move to Done Task
          </Button>
          <Button
            style={{
              width: "100%",
            }}
            color="primary"
            onClick={handleAllMoveToDone}
          >
            All Move To Done Task
          </Button>
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
          <div className="d-flex mb-2">
            <Input
              id="doneSearchInput"
              placeholder="Search Done Tasks"
              onChange={(e) => searchHandler(e)}
            />
            <Button color="danger" onClick={searchData}>
              Search
            </Button>
          </div>
          <h6 className="spanSelect">
            <input
              style={{
                marginTop: "5px",
              }}
              type="checkbox"
              onChange={() => handleSelectAll("done")}
              checked={selectAllDone}
            />
            <span className="ms-1">Select All</span>
          </h6>
          <hr
            style={{
              marginTop: "0",
              width: "100%",
              backgroundColor: "darkgray",
            }}
          />
          <div className="p-3 pt-0">
            {doneTask.map((e, i) => {
              return (
                <div className="d-flex justify-content-between m-2" key={i}>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(e, i, "done")}
                    checked={selectedDoneTasks.includes(i)}
                    value={e}
                  />
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
                      onClick={() => deleteDoneTask(i)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <Button
            style={{
              width: "100%",
            }}
            color="success"
            className="mt-2"
            onClick={moveToPendingTask}
            disabled={selectedDoneTasks.length === 0}
          >
            Move to Pending Task
          </Button>
          <Button
            style={{
              width: "100%",
            }}
            color="primary"
            onClick={handleAllMoveToPending}
          >
            All Move To Pending Task
          </Button>
          <Button
            style={{
              width: "100%",
            }}
            color="danger"
            onClick={deleteAllDoneTasks}
          >
            Delete All
          </Button>
        </div>
      </div>
    </div>
  );
}
