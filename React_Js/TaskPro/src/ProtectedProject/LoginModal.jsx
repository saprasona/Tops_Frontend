  /*
  {
    "name": "urvish",
    "email": "uv@gmail.com",
    "number": "7895461237",
    "password": "123456",
    "age": 23,
    "address": [
      {
        "add": "vesu",
        "city": "surat",
        "state": "guj",
        "pinCode": "395007"
      }
    ]
	}
*/
import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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

export default function LoginModal({ toggle, modal }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    age: "",
    address: {
      add: "",
      city: "",
      state: "",
      pinCode: "",
    },
    userType: null,
  });

  const setAddress = (newAddress) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      address: {
        ...prevUserData.address,
        ...newAddress,
      },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      [name]: value,
    });
  };

  const handleUserTypeChange = (selectedOption) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      userType: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User Data:", userData);

    setUserData({
      name: "",
      email: "",
      number: "",
      password: "",
      age: "",
      address: {
        add: "",
        city: "",
        state: "",
        pinCode: "",
      },
      userType: null,
    });

    // Close the modal
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
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
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                value={userData.email}
                placeholder="Email"
                type="email"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="number">Phone Number</Label>
              <Input
                id="number"
                name="number"
                value={userData.number}
                placeholder="Phone Number"
                type="tel"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                value={userData.password}
                placeholder="Password"
                type="password"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                id="age"
                name="age"
                value={userData.age}
                placeholder="Age"
                type="number"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                id="address"
                name="add"
                value={userData.address.add}
                placeholder="Address"
                onChange={handleAddressChange}
              />
              <Input
                id="city"
                name="city"
                value={userData.address.city}
                placeholder="City"
                onChange={handleAddressChange}
              />
              <Input
                id="state"
                name="state"
                value={userData.address.state}
                placeholder="State"
                onChange={handleAddressChange}
              />
              <Input
                id="pinCode"
                name="pinCode"
                value={userData.address.pinCode}
                placeholder="Pin Code"
                onChange={handleAddressChange}
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
            <Button color="danger" className="w-100" type="submit">
              Register
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
