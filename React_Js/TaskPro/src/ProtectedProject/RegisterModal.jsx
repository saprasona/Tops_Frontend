import React, { useState } from "react";
import Select from "react-select";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";

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

    // Reset form fields
    setUserData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: null,
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
          <Button color="primary" className="w-25" type="submit">
            Register
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
