import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function MultiInput2() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    hobby: [],
    gender: "",
  });

  const [userArr, setUserArr] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addUser = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // If updating an existing user
      const updatedUsers = [...userArr];
      const originalEmail = userArr[editIndex].email;

      // Check if the email is being changed and if the new email already exists
      if (
        originalEmail !== user.email &&
        userArr.some((existingUser) => existingUser.email === user.email)
      ) {
        alert("Email already exists!");
        return;
      }

      updatedUsers[editIndex] = user;
      setUserArr(updatedUsers);
      setEditIndex(null);
    } else {
      // If adding a new user
      if (userArr.some((existingUser) => existingUser.email === user.email)) {
        alert("Email already exists!");
        return;
      }

      setUserArr([...userArr, user]);
    }

    // Reset user
    setUser({
      name: "",
      email: "",
      password: "",
      hobby: [],
      gender: "",
    });
  };

  const deleteUser = (index) => {
    const updatedUsers = [...userArr];
    updatedUsers.splice(index, 1);
    setUserArr(updatedUsers);
  };

  const editUser = (index) => {
    const userToEdit = userArr[index];
    setUser({
      name: userToEdit.name,
      email: userToEdit.email,
      password: userToEdit.password,
      hobby: userToEdit.hobby,
      gender: userToEdit.gender,
    });
    setEditIndex(index);
  };

  const checkHandler = (hob, e) => {
    const isChecked = e.target.checked;
    const updatedHobbies = isChecked
      ? [...user.hobby, hob]
      : user.hobby.filter((h) => h !== hob);

    setUser({ ...user, hobby: updatedHobbies });
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
          <Label for="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter Your Email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter Your Password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Hobby</legend>
          <FormGroup check inline>
            <Label check>
              <Input
                type="checkbox"
                value="Reading"
                checked={user.hobby.includes("Reading")}
                onChange={(e) => checkHandler("Reading", e)}
              />{" "}
              Reading
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              <Input
                type="checkbox"
                value="Gaming"
                checked={user.hobby.includes("Gaming")}
                onChange={(e) => checkHandler("Gaming", e)}
              />{" "}
              Gaming
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              <Input
                type="checkbox"
                value="Cooking"
                checked={user.hobby.includes("Cooking")}
                onChange={(e) => checkHandler("Cooking", e)}
              />{" "}
              Cooking
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Gender</legend>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="gender"
                value="Male"
                checked={user.gender === "Male"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />{" "}
              Male
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              <Input
                type="radio"
                name="gender"
                value="Female"
                checked={user.gender === "Female"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />{" "}
              Female
            </Label>
          </FormGroup>
        </FormGroup>
        <Button className="w-100" color="danger" type="submit">
          {editIndex !== null ? "Update" : "Submit"}
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
            <th>HOBBY</th>
            <th>GENDER</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {userArr.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.password}</td>
              <td>{e.hobby.join(", ")}</td>
              <td>{e.gender}</td>
              <td>
                <FaEdit
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => editUser(i)}
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
          ))}
        </tbody>
      </Table>
    </div>
  );
}
