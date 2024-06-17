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

const initialData = { email: "", password: "" };

export default function LoginModal({ toggle, modal, regToggle }) {
  const [credentials, setCredentials] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const toggleHandler = () => {
    toggle();
    regToggle();
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:9999/user/signin",
        credentials
      );
      console.log("Login successful:", response.data);
      toast.success("Logged in successfully!");
      setLoading(false);
      setCredentials(initialData);
      toggle();
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Failed to log in. Please try again later.");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={loginHandler}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </FormGroup>
            <Button color="primary" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Form>
          <p>
            Don't have an account?{" "}
            <span
              onClick={toggleHandler}
              role="button"
              style={{ color: "blue", cursor: "pointer" }}
            >
              Sign Up
            </span>
          </p>
        </ModalBody>
      </Modal>
    </div>
  );
}
