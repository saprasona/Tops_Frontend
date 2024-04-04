import React, { useState } from "react";
import Select from "react-select";
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

const options = [
  { value: "user", label: "User" },
  { value: "employee", label: "Employee" },
  { value: "admin", label: "Admin" },
];

export default function RegisterModal({ toggle, modal }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: null,
  });

  const [userAddress, setUserAddress] = useState({
    add: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleUserTypeChange = (selectedOption) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      userType: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle registration logic here
    console.log("User Data:", userData);
    console.log("User Address:", userAddress);

    // Reset form fields
    setUserData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: null,
    });

    setUserAddress({
      add: "",
      city: "",
      state: "",
      pinCode: "",
    });

    // Close the modal
    toggle();
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
            <Label for="userType">User Type</Label>
            <Select
              id="userType"
              name="userType"
              value={userData.userType}
              options={options}
              onChange={handleUserTypeChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="add">Address</Label>
            <Input
              id="add"
              name="add"
              value={userAddress.add}
              placeholder="Address"
              onChange={(e) =>
                setUserAddress({ ...userAddress, add: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              id="city"
              name="city"
              value={userAddress.city}
              placeholder="City"
              onChange={(e) =>
                setUserAddress({ ...userAddress, city: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              id="state"
              name="state"
              value={userAddress.state}
              placeholder="State"
              onChange={(e) =>
                setUserAddress({ ...userAddress, state: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="pinCode">Pin Code</Label>
            <Input
              id="pinCode"
              name="pinCode"
              value={userAddress.pinCode}
              placeholder="Pin Code"
              onChange={(e) =>
                setUserAddress({ ...userAddress, pinCode: e.target.value })
              }
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
