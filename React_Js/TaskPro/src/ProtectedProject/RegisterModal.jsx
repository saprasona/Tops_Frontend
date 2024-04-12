import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";

export default function RegisterModal({ toggle, modal }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userAddress, setUserAddress] = useState({
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "address" || name === "city" || name === "state" || name === "pinCode") {
      setUserAddress((prevUserAddress) => ({
        ...prevUserAddress,
        [name]: value,
      }));
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const data = {
      ...userData,
      address: userAddress
    };

    // Log user data and address before sending the request
    console.log("User Data:", data);
    console.log("User Address:", userAddress);

    axios({
      method: "post",
      url: "http://localhost:9999/user/signup",
      data: data,
    })
      .then((res) => {
        toast.success("Sign up successful!");
        toggle();
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setUserData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setUserAddress({
          address: "",
          city: "",
          state: "",
          pinCode: "",
        });
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error("Something went wrong.");
      });
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Register</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={userData.name}
              placeholder="Name"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={userData.email}
              placeholder="Email"
              type="email"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              value={userData.password}
              placeholder="Password"
              type="password"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              value={userData.confirmPassword}
              placeholder="Confirm Password"
              type="password"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={userAddress.address}
              placeholder="Address"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              id="city"
              name="city"
              value={userAddress.city}
              placeholder="City"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              id="state"
              name="state"
              value={userAddress.state}
              placeholder="State"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pinCode">Pin Code</Label>
            <Input
              id="pinCode"
              name="pinCode"
              value={userAddress.pinCode}
              placeholder="Pin Code"
              onChange={handleChange}
            />
          </FormGroup>
          <Button color="primary" className="w-25" type="submit">
            Register
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
