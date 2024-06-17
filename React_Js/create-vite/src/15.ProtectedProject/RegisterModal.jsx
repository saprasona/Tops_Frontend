import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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
import { useNavigate } from "react-router-dom";

const initialUser = {
  name: "",
  email: "",
  number: "",
  password: "",
  conPassword: "",
  gender: "", // Added gender property
  age: "",
};
const initialAddress = {
  add: "",
  city: "",
  state: "",
  pinCode: "",
};

export default function RegisterModal({ toggle, modal, loginToggle }) {
  const [user, setUser] = useState(initialUser);
  const [address, setAddress] = useState(initialAddress);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { ...user, address: [address] };

    axios.post("http://localhost:9999/user/signup", data)
      .then((res) => {
        toast.success("Sign up successful!");
        toggle();
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setUser(initialUser);
        setAddress(initialAddress);
        navigate("/");
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error("Something went wrong.");
      });
  };

  const modalHandler = () => {
    toggle();
    loginToggle();
    setAddress(initialAddress);
    setUser(initialUser);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form onSubmit={submitHandler} className="border p-4 rounded-2">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                type="text"
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
              />
            </FormGroup>
            
            {/* Other form fields go here */}

            <Button color="danger">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
