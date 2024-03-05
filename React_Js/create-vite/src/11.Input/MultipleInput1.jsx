import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function MultipleInput1() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userArr, setUserArr] = useState([]);

  const addUser = (e) => {
    e.preventDefault();

    // Check if the email already exists
    if (userArr.some((existingUser) => existingUser.email === user.email)) {
      alert("Email already exists!");
      return;
    }

    setUserArr([...userArr, user]);
    setUser({
      name: "",
      email: "",
      password: "",
      city:"",
    });
  };

  // const deleteUser = (index) => {
  //   setUserArr(userArr.filter((_, i) => i !== index));
  // };

  const deleteUser = (index) => {
    const updatedUsers = [...userArr];
    updatedUsers.splice(index, 1);
    setUserArr(updatedUsers);
  };

  return (
    <div className="d-flex align-items-center flex-column">
      <Form
        onSubmit={(e) => addUser(e)}
        className="w-50 border border-dark p-3 rounded-3"
        style={{ backgroundColor: "lightblue" }}
      >
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter Your Name"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            id="Email"
            placeholder="Enter Your Email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            id="Password"
            placeholder="Enter Your Password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </FormGroup>
        <Button className="w-100" color="danger">
          Submit
        </Button>
      </Form>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>SR.NO.</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
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
                <td>{e.password}</td>
                <td>
                  <FaEdit style={{ cursor: "pointer", color: "blue" }} />
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
