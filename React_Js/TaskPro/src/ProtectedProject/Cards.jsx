import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./Cards.css";

export default function CardComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from the server
    axios({
      method: "get",
      url: `http://localhost:9999/product/getAll`,
    })
      .then((res) => {
        console.log("Fetched products:", res.data.data);
        setProducts(res.data.data); // Update the products state with the fetched data
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  const handleDelete = (productId) => {
    console.log("Delete product with ID:", productId);
  };

  const handleEdit = (productId) => {
    console.log("Edit product with ID:", productId);
  };

  return (
    <div className="product-container">
      <h1>Product Table</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th scope="col">Sr No</th>
            <th scope="col">Image</th>
            <th scope="col">Brand</th>
            <th scope="col">Price</th>
            <th scope="col">Color</th>
            <th scope="col">Size</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>
                <img src={product.image} className="product-image" />
              </td>
              <td>{product.brand}</td>
              <td>${product.price}</td>
              <td>
                {product.color.map((color, index) => (
                  <div
                    key={index}
                    className={`product-color-dot product-color-${color.toLowerCase()}`}
                  ></div>
                ))}
              </td>
              <td>
                <div className="product-size-container">
                  {product.size.map((size) => (
                    <div key={size} className="product-size">
                      {size}
                    </div>
                  ))}
                </div>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(product.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-danger ms-1"
                  onClick={() => handleDelete(product.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
