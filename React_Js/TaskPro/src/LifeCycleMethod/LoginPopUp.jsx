import React, { Component } from "react";
import { Button } from "reactstrap";
import Unmount from "./Unmount";

export default class LoginPopUp extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      id1: null,
      id2: null,
      isLogin: false,
    };
  }

  componentDidMount() {
    const id1 = setInterval(() => {
      alert("Hello please login");
    }, 4000);

    const id2 = setInterval(() => {
      alert("Another message for login");
    }, 7000);

    this.setState({ id1, id2 });
  }

  componentDidUpdate(oldProps, oldState) {
    if (this.state.amount - oldState.amount === 5) {
      clearInterval(this.state.id1);
      clearInterval(this.state.id2);
      this.setState({ isLogin: true });
    }
  }

  render() {
    return (
      <>
        {!this.state.isLogin && <Unmount />}
        <h2>Amount is {this.state.amount}</h2>

        <Button
          color="danger"
          onClick={() => this.setState({ amount: this.state.amount + 1 })}
        >
          Inc Amount
        </Button>
        <Button
          className="ms-2"
          color="danger"
          onClick={() => this.setState({ amount: this.state.amount + 5 })}
        >
          Inc-5 Amount
        </Button>
      </>
    );
  }
}
