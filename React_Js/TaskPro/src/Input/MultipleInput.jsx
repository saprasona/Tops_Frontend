import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Table } from "reactstrap";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";

export default function MultipleInput() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    dob: "",
    city: "",
  });

  const [userArr, setUserArr] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addUser = (e) => {
    e.preventDefault();

    // If editingIndex is not null, it means we are updating an existing user
    if (editingIndex !== null) {
      const updatedUsers = [...userArr];
      updatedUsers[editingIndex] = user;
      setUserArr(updatedUsers);
      setEditingIndex(null);
    } else {
      // Check if the email already exists only when adding a new user
      if (userArr.some((existingUser) => existingUser.email === user.email)) {
        alert("Email already exists!");
        return;
      }
      setUserArr([...userArr, user]);
    }

    setUser({
      name: "",
      email: "",
      password: "",
      address: "",
      dob: "",
      city: "",
    });
  };

  const deleteUser = (index) => {
    const updatedUsers = [...userArr];
    updatedUsers.splice(index, 1);
    setUserArr(updatedUsers);
  };

  return (
    <div className="d-flex align-items-center flex-column border border-dark p-3 m-5">
      <h1>Registration Form</h1>
      <Form
        onSubmit={(e) => addUser(e)}
        className="w-50 border border-dark p-4 rounded-3"
        style={{ backgroundColor: "lightblue" }}
      >
        <FormGroup row>
          <Label for="name" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              id="name"
              placeholder="Enter Your Name"
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              id="Email"
              name="email"
              placeholder="Enter Your Email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="datetime" sm={2}>
            DOB
          </Label>
          <Col sm={10}>
            <Input
              id="Date"
              name="date"
              placeholder="date"
              type="date"
              value={user.dob}
              onChange={(e) => setUser({ ...user, dob: e.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Text" sm={2}>
            City
          </Label>
          <Col sm={10}>
            <Input
              id="City"
              name="city"
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Password" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              id="Password"
              name="password"
              placeholder="Enter Your password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Text" sm={2}>
            Address
          </Label>
          <Col sm={10}>
            <Input
              id="Text"
              name="text"
              type="textarea"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
          </Col>
        </FormGroup>
        <Button color={editingIndex !== null ? "info" : "danger"}>
          {editingIndex !== null ? "Update" : "Submit"}
        </Button>
      </Form>
      <hr
        className="m-3"
        style={{
          marginTop: "0",
          width: "100%",
          height: "5px",
          backgroundColor: "lightblue",
        }}
      />
      <Table>
        <thead>
          <tr>
            <th>SR.NO.</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>DOB</th>
            <th>CITY</th>
            <th>PASSWORD</th>
            <th>ADDRESS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {userArr.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.dob}</td>
                <td>{e.city}</td>
                <td>{e.password}</td>
                <td>{e.address}</td>
                <td>
                  <FaEdit
                    style={{ cursor: "pointer", color: "blue" }}
                    onClick={() => {
                      setUser({ ...e });
                      setEditingIndex(i);
                    }}
                  />
                  <FaTrash
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      color: "red",
                    }}
                    onClick={() => deleteUser(i)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
