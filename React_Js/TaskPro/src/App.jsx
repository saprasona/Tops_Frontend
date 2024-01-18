import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./project/Home";
import LoginPopUp from "./LifeCycleMethod/LoginPopUp";
import Unmount from "./LifeCycleMethod/Unmount";
import UseEffectPro from "./Hook/UseEffectPro";

function App() {
  return (
    <div className="appDiv">
      {/* ------project-------- */}
      {/* <Home/> */}

      {/*--------LifeCycleMethod---------*/}
      {/* <LoginPopUp /> */}

      {/* ------UseEffectPro */}
      <UseEffectPro />
      <ToastContainer />

    </div>
  );
}

export default App;
