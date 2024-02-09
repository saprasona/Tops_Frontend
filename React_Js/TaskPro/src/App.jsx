import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./project/Home";
import LoginPopUp from "./LifeCycleMethod/LoginPopUp";
import Unmount from "./LifeCycleMethod/Unmount";
import UseEffectPro from "./Hook/UseEffectPro";
import InputCom from "./Input/InputCom";
import InputFruit from "./Input/InputFruit";
import InputCom1 from "./Input/InputCom1";
import MultpleInput from "./Input/MultipleInput";
import MultipleInput from "./Input/MultipleInput";
import MultipleInput1 from "./Input/MultipleInput1";

function App() {
  return (
    <div className="appDiv">
      {/* ------project-------- */}
      {/* <Home/> */}

      {/*--------LifeCycleMethod---------*/}
      {/* <LoginPopUp /> */}

      {/* ------UseEffectPro */}
      {/* <UseEffectPro /> */}

      {/* ---------Input-------- */}
      {/* <InputCom /> */}

      {/* ---------InputFruit-------- */}
      {/* <InputFruit /> */}

      {/* InputCom1 */}
      {/* <InputCom1 /> */}

      {/* MultipleInput */}
      {/* <MultipleInput /> */}
      <ToastContainer />

{/* MultipleInput1 */}
<MultipleInput1 />
    </div>
  );
}

export default App;
