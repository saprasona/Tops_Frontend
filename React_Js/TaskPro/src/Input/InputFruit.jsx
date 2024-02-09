import { Plus, Trash } from "lucide-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InputCom() {
  const [fruit, setFruit] = useState("");
  const [fruitArr, setFruitArr] = useState([]);

  // to get data from input
  const getData = (ele) => {
    setFruit(ele?.target?.value);
  };

  // to add inputed data into array
  const addData = () => {
    if (fruit.trim() !== "") {
      // Check if the fruit already exists
      if (!fruitArr.includes(fruit)) {
        // ... to copy old data
        setFruitArr([...fruitArr, fruit]);
        // to empty input after adding data
        setFruit("");
      } else {
        toast.warn("Fruit Name already exists!");
      }
    } else {
      toast.warn("Please enter a Fruit Name!");
    }
  };

  // to delete a fruit using filter
  const deleteFruit = (index) => {
    const updatedFruits = fruitArr.filter((_, i) => i !== index);
    setFruitArr(updatedFruits);
  };

  // handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addData();
    }
  };

  return (
    <div className="input-container">
      <div className="fruit-section d-flex align-items-center">
        <Input
          type="text"
          name="nameInput"
          placeholder="Enter Your Fruit name Here"
          onChange={(e) => getData(e)}
          onKeyPress={handleKeyPress}
          value={fruit}
          style={{ width: "500px", marginRight: "8px" ,height:"45px" }}
        />
        <Button color="danger" className="add-button" onClick={() => addData()}>
          <Plus />
        </Button>
      </div>
      <div className="w-100 d-flex justify-content-center pt-4">
        <div className="w-25 border rounded-2">
          <h1 className="todo">FRUIT LIST</h1>
          <hr
            style={{
              marginTop: "0",
              width: "100%",
              height: "5px",
              backgroundColor: "plum",
            }}
          />
          {fruitArr.length > 0 ? (
            <ol>
              {fruitArr.map((e, i) => (
                <li
                  key={i}
                  className="d-flex justify-content-between m-3"
                  style={{
                    borderBottom:
                      i < fruitArr.length - 1 ? "1px solid plum" : "none",
                    alignItems: "center", 
                  }}
                >
                  <span className="fruit-number">{i + 1}</span>
                  {e}
                  <Button color="link" onClick={() => deleteFruit(i)}>
                    <Trash />
                  </Button>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-center">No fruits added yet!</p>
          )}
        </div>
      </div>
    </div>
  );
}
