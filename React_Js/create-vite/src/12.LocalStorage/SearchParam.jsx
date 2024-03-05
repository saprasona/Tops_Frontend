import React, { useState, useEffect } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Table } from "reactstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom

const cityOptions = [
  "Surat",
  "Ahmedabad",
  "Rajkot",
  "Vadodara",
  "Bhavnagar",
  "Gandhinagar",
  "Vapi",
  "Navsari",
  "Patan",
  "Valsad",
];

export default function SearchParam() {
  const { city } = useParams(); // Get the city parameter from the URL
  const [userArr, setUserArr] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("userArr"));
    return storedData || [];
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    city: city || "", // Initialize city with the URL parameter or empty string if not provided
    address: "",
    hobby: [],
    gender: "",
    range: 50,
    color: "",
  });

  const [editIndex, setEditIndex] = useState(null);
  const [searchName, setSearchName] = useState(""); // State to store the value of the search input
  //   const [searchCity, setSearchCity] = useState(city || ""); // Initialize searchCity with the URL parameter or empty string if not provided

  useEffect(() => {
    localStorage.setItem("userArr", JSON.stringify(userArr));
  }, [userArr]);

  useEffect(() => {
    if (city) {
      setUser({ ...user, city }); // Update the city in the state if city parameter changes
    }
  }, [city]); // Listen for changes in city parameter

  const addUser = (e) => {
    e.preventDefault();
    if (
      !user.name ||
      !user.email ||
      !user.password ||
      !user.city ||
      !user.address ||
      user.hobby.length === 0 ||
      !user.gender
    ) {
      toast.warn("Please fill all the required fields");
      return;
    }

    if (editIndex !== null) {
      const updatedUsers = [...userArr];
      const originalEmail = userArr[editIndex].email;

      if (
        originalEmail !== user.email &&
        userArr.some((existingUser) => existingUser.email === user.email)
      ) {
        toast.warn("Email already exists!");
        return;
      }

      updatedUsers[editIndex] = user;
      setUserArr(updatedUsers);
      setEditIndex(null);
    } else {
      if (userArr.some((existingUser) => existingUser.email === user.email)) {
        toast.warn("Email already exists!");
        return;
      }

      setUserArr([...userArr, user]);
    }

    setUser({
      name: "",
      email: "",
      password: "",
      city: "",
      address: "",
      hobby: [],
      gender: "",
      range: 50,
      color: "",
    });
  };

  const deleteUser = (index) => {
    const updatedUsers = userArr.filter((item, i) => i !== index);
    setUserArr(updatedUsers);
  };

  const checkHandler = (hob, e) => {
    const isChecked = e.target.checked;
    const updatedHobbies = isChecked
      ? [...user.hobby, hob]
      : user.hobby.filter((h) => h !== hob);

    setUser({ ...user, hobby: updatedHobbies });
  };

  const handleRangeChange = (e) => {
    setUser({ ...user, range: e.target.value });
  };

  const handleColorChange = (e) => {
    setUser({ ...user, color: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearchName(e.target.value); // Update searchName state with the value from the input
  };

  //   const handleSearchCityChange = (e) => {
  //     setSearchCity(e.target.value); // Update searchCity state with the value from the input
  //   };

  // Filter the userArr based on the searchName
  const filteredUsers = userArr.filter((user) =>
    user.name.toLowerCase().includes(searchName.toLowerCase())
  );

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
          <Label for="city" sm={2}>
            City
          </Label>
          <Col sm={10}>
            <Input
              type="select"
              name="city"
              id="city"
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
            >
              <option value="">Select City</option>
              {cityOptions.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="address" sm={2}>
            Address
          </Label>
          <Col sm={10}>
            <Input
              id="address"
              placeholder="Enter Your Address"
              type="textarea"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="hobby" sm={2}>
            Hobby
          </Label>
          <Col sm={10}>
            <FormGroup check inline className="m-2">
              <Label check>
                <Input
                  type="checkbox"
                  value="Reading"
                  checked={user.hobby.includes("Reading")}
                  onChange={(e) => checkHandler("Reading", e)}
                />
                Reading
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  value="Sports"
                  checked={user.hobby.includes("Sports")}
                  onChange={(e) => checkHandler("Sports", e)}
                />
                Sports
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  value="Music"
                  checked={user.hobby.includes("Music")}
                  onChange={(e) => checkHandler("Music", e)}
                />
                Music
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="gender" sm={2}>
            Gender
          </Label>
          <Col sm={10}>
            <FormGroup check inline className="m-2">
              <Label check>
                <Input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={user.gender === "male"}
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                />
                Male
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={user.gender === "female"}
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                />
                Female
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>

        {/* Range input */}
        <FormGroup row>
          <Label for="range" sm={2}>
            Range
          </Label>
          <Col sm={10}>
            <Input
              id="range"
              type="range"
              min="0"
              max="100"
              value={user.range}
              onChange={handleRangeChange}
            />
          </Col>
        </FormGroup>

        {/* Color picker */}
        <FormGroup row>
          <Label for="color" sm={2}>
            Color
          </Label>
          <Col sm={10}>
            <Input
              id="color"
              type="color"
              value={user.color}
              onChange={handleColorChange}
            />
          </Col>
        </FormGroup>

        <Button
          className="m-2"
          color={editIndex !== null ? "info" : "danger"}
          type="submit"
        >
          {editIndex !== null ? "Update" : "Submit"}
        </Button>

        <hr
          style={{
            marginTop: "0",
            width: "100%",
            height: "5px",
            backgroundColor: "lightblue",
          }}
        />

        {/* Search input */}
        <FormGroup row>
          <Label for="search" sm={2}>
            Search
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              id="search"
              placeholder="Search by name"
              value={searchName}
              onChange={handleSearchChange}
              style={{ border: "1px solid #ced4da", borderRadius: "0.25rem" }}
            />
          </Col>
        </FormGroup>
       
        {/* <FormGroup row>
          <Label for="searchCity" sm={2}>
            Search City
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              id="searchCity"
              placeholder="Search by city"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              style={{ border: "1px solid #ced4da", borderRadius: "0.25rem" }}
            />
          </Col>
        </FormGroup> */}
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
            <th>PASSWORD</th>
            <th>CITY</th>
            <th>ADDRESS</th>
            <th>HOBBY</th>
            <th>GENDER</th>
            <th>RANGE</th>
            <th>COLOR</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>{e.city}</td>
                <td>{e.address}</td>
                <td>{e.hobby.join(", ")}</td>
                <td>{e.gender}</td>
                <td>{e.range}</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: e.color,
                        marginLeft: "70px",
                      }}
                    ></div>
                    {/* getColorName(e.color) */}
                    {e.color}
                  </div>
                </td>
                <td>
                  <FaEdit
                    style={{ cursor: "pointer", color: "blue" }}
                    onClick={() => {
                      setUser({ ...e });
                      setEditIndex(i);
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
