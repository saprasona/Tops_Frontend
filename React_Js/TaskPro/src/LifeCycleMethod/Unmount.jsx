import react, { Component } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default class Unmount extends Component {
  componentWillUnmount() {
    toast.info("Login Success");
  }
  render() {
    return <h1>User is not login</h1>;
  }
}