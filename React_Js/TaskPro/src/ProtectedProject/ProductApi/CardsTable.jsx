import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./CardsTable.css";

export default function CardsTable({ refetch, refresh, toggle, setDefaultData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    }).then((res) => {
      setData(res.data.data);
    });
  }, [refresh]);

  const deleteHandler = (id) => {
    axios({
      method: "delete",
      url: "http://localhost:9999/product/delete/" + id,
    })
      .then((res) => {
        refetch();
        alert("Deleted successfully!");
      })
      .catch((err) => {
        console.log("Error deleting item:", err);
      });
  };

  return (
    <div className="card-table-container">
      <div className="d-flex product">
        <h1 pt-head>Product Table</h1>
        <button className="add-product-btn" onClick={toggle}>Add Product</button>
      </div>
      <table className="card-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Title</th>
            <th>Image</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Color</th>
            <th>Size</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.brand}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{item.brand}</td>
              <td>{item.price}</td>
              <td>
                <div className="color-dots">
                  {item.color.map((color, idx) => (
                    <span
                      key={idx}
                      style={{ backgroundColor: color }}
                      className="color-dot"
                    ></span>
                  ))}
                </div>
              </td>
              <td>
                <div className="size-box">
                  {["41", "42", "43", "44", "45", "46"].map((size, idx) => (
                    <div
                      key={idx}
                      className={`size-item ${
                        item.size.includes(size) ? "available" : "disabled"
                      }`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </td>

              <td>
                <button
                  className="action-btn edit"
                  onClick={() => {
                    toggle();
                    setDefaultData(item);
                  }}
                >
                  <FaEdit className="react-icons" />
                </button>
                <button
                  className="action-btn delete"
                  onClick={() => deleteHandler(item._id)}
                >
                  <FaTrashAlt className="react-icons" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
