import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaEdit } from "react-icons/fa";

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "blue", label: "Blue" },
];

const categoryOptions = [
  { value: "casual", label: "Casual" },
  { value: "sports", label: "Sports" },
  { value: "formal", label: "Formal" },
  { value: "party-Wear", label: "Party Wear" },
];

const sizeOptions = [
  { value: "41", label: "41" },
  { value: "42", label: "42" },
  { value: "43", label: "43" },
  { value: "44", label: "44" },
  { value: "45", label: "45" },
];

export default function ProductForm({
  modal,
  toggle,
  refetch,
  defaultData,
  updateMode,
}) {
  const initialState = {
    title: "",
    description: "",
    brand: "",
    gender: "",
    color: [],
    category: [],
    price: "",
    discountPercentage: "",
    thumbnail: "",
    availableStock: "",
    size: [],
  };

  const [product, setProduct] = useState(initialState);

  useEffect(() => {
    setProduct(defaultData);
  }, [defaultData]);

  const addProduct = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: product,
    })
      .then((res) => {
        toast.success("Added successfully!");
        toggle();
        refetch();
        setProduct(initialState);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  const updateProduct = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `http://localhost:9999/product/update/${defaultData._id}`,
      data: product,
    })
      .then((res) => {
        toast.success("Updated successfully!");
        toggle();
        refetch();
        setProduct(initialState);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  const selectHandler = (e, type) => {
    if (type === "color") {
      const color = e.map((e) => e.value);
      setProduct({ ...product, color });
    } else if (type === "category") {
      const category = e.map((e) => e.value);
      setProduct({ ...product, category });
    }
  };

  const checkHandler = (ee) => {
    if (product?.size?.includes(ee)) {
      let filter = product?.size.filter((e) => e !== ee);
      setProduct({ ...product, size: filter });
    } else {
      setProduct({ ...product, size: [...product.size, ee] });
    }
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{updateMode ? "Edit Product" : "Add Product"}</ModalHeader>
        <ModalBody>
          <Form onSubmit={updateMode ? updateProduct : addProduct}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter Title"
                type="text"
                value={product?.title}
                onChange={(e) =>
                  setProduct({ ...product, title: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                id="description"
                placeholder="Enter description"
                type="text"
                value={product?.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="brand">Brand</Label>
              <Input
                id="brand"
                placeholder="Enter brand"
                type="text"
                value={product?.brand}
                onChange={(e) =>
                  setProduct({ ...product, brand: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup tag="fieldset">
              <Label>Gender</Label>
              <div className="d-flex w-100 gap-3">
                <FormGroup>
                  <Input
                    type="radio"
                    className="me-2"
                    checked={product.gender === "male"}
                    onChange={() => setProduct({ ...product, gender: "male" })}
                  />
                  <Label>Male</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="radio"
                    className="me-2"
                    checked={product?.gender === "female"}
                    onChange={() => setProduct({ ...product, gender: "female" })}
                  />
                  <Label>Female</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="radio"
                    className="me-2"
                    checked={product?.gender === "kids"}
                    onChange={() => setProduct({ ...product, gender: "kids" })}
                  />
                  <Label>Kids</Label>
                </FormGroup>
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="color">Color</Label>
              <Select
                id="color"
                isMulti
                value={product.color?.map((color) => ({
                  value: color,
                  label: color,
                }))}
                options={colorOptions}
                onChange={(e) => selectHandler(e, "color")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Select
                id="category"
                isMulti
                options={categoryOptions}
                value={product.category?.map((ele) => ({
                  value: ele,
                  label: ele,
                }))}
                onChange={(e) => selectHandler(e, "category")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                id="price"
                placeholder="Enter price"
                type="number"
                value={product?.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="discountPercentage">Discount</Label>
              <Input
                id="discountPercentage"
                placeholder="Enter discount"
                type="number"
                value={product?.discountPercentage}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    discountPercentage: e?.target?.value,
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="thumbnail">Thumbnail</Label>
              <Input
                id="thumbnail"
                placeholder="Enter thumbnail URL"
                type="text"
                value={product?.thumbnail}
                onChange={(e) =>
                  setProduct({ ...product, thumbnail: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="availableStock">Available Stock</Label>
              <Input
                id="availableStock"
                placeholder="Enter available stock"
                type="number"
                value={product?.availableStock}
                onChange={(e) =>
                  setProduct({ ...product, availableStock: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="size">Size</Label>
              <div className="d-flex gap-2">
                {sizeOptions?.map?.((size, i) => (
                  <div key={i}>
                    <Input
                      id={`checkBox${i}`}
                      type="checkbox"
                      checked={product?.size?.includes(size.value)}
                      onChange={() => checkHandler(size.value)}
                      className="me-2"
                    />
                    <Label for={`checkBox${i}`}>{size.label}</Label>
                  </div>
                ))}
              </div>
            </FormGroup>
            {updateMode ? (
              <Button color="danger" type="update">
                Update
              </Button>
            ) : (
              <Button color="danger" type="submit">
                Submit
              </Button>
            )}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
