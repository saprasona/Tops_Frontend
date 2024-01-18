import React, { useState } from "react";

const ProductInfo = ({
  id,
  productinfo,
  pricePerUnit,
  initialPricePerUnit,
  quantity,
  initialQuantity,
  onQuantityChange,
  onRemove,
}) => {
  const calculateSubtotal = () => {
    return quantity * pricePerUnit;
  };

  return (
    <tr>
      <td>{productinfo}</td>
      <td>${pricePerUnit}</td>
      <td>
        <input
          type="number"
          value={quantity}
          onChange={(e) =>
            onQuantityChange(
              id,
              Math.max(1, parseInt(e.target.value) || 0)
            )
          }
        />
      </td>
      <td>${calculateSubtotal()}</td>
      <td>
        <button onClick={() => onRemove(id)}>Remove</button>
      </td>
    </tr>
  );
};

const SubtotalCalculator = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      productinfo: "Logo Fortunata Window Hardware Decorative Holdbacks Mocha",
      pricePerUnit: 10,
      initialPricePerUnit: 10,
      quantity: 1,
      initialQuantity: 1,
    },
    {
      id: 2,
      productinfo: "Woven Trellis Window Hardware Clip Rings Bronze",
      pricePerUnit: 15,
      initialPricePerUnit: 15,
      quantity: 1,
      initialQuantity: 1,
    },
  ]);

  const handleQuantityChange = (productId, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const handleRemove = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.initialQuantity,
              pricePerUnit: product.initialPricePerUnit,
            }
          : product
      )
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Info</th>
            <th>Price per Unit</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductInfo
              key={product.id}
              id={product.id}
              productinfo={product.productinfo}
              pricePerUnit={product.pricePerUnit}
              initialPricePerUnit={product.initialPricePerUnit}
              quantity={product.quantity}
              initialQuantity={product.initialQuantity}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubtotalCalculator;
