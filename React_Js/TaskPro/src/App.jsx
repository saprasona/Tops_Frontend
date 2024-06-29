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
import LocalStorage from "./LocalStorage/LocalStorage";
import SelectCom from "./Input/SelectCom";
import RangeColor from "./Input/RangeColor";
import StrToObj from "./Input/StrToObj";
import LocalStorage1 from "./LocalStorage/LocalStorage1";
import LocalStorage2 from "./LocalStorage/LocalStorage2";
import RangeColor1 from "./Input/RangeColor1";
import ProtectedProject from "./ProtectedProject/Router";
import AppRedux from "./Redux/SimpleRedux/AppRedux";
import AppRedux1 from "./Redux1Task/SimpleRedux/AppRedux1";
import AppRedux2 from "./CrudRedux/SimpleRedux/AppRedux2";
import AppRedux3 from "./CrudReduxTask/SimpleRedux/AppRedux3";
import AppProduct from "./ReduxProjectApi/Project/AppProduct";



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

      {/* -------InputCom1----- */}
      {/* <InputCom1 /> */}

      {/* ---------MultipleInput------- */}
      {/* <MultipleInput /> */}
      <ToastContainer />

      {/* ----------MultipleInput1---------- */}
      {/* <MultipleInput1 /> */}

      {/* -------LocalStorage---------- */}
      {/* <LocalStorage /> */}

      {/* --------SelectCom-------- */}
      {/* <SelectCom /> */}

      {/* ---------StrToObj---------- */}
      {/* <StrToObj /> */}

      {/* --------RangeColor--------- */}
      {/* <RangeColor /> */}

      {/* --------RangeColor1--------- */}
      {/* <RangeColor1/> */}

      {/* ------LocalStorage1------- */}
      {/* <LocalStorage1 /> */}

      {/* ------LocalStorage2------- */}
      {/* <LocalStorage2 /> */}

      {/* ---------ProtectedProject-------- */}
      {/* <ProtectedProject /> */}

      {/*------- Simple Redux ----------*/}
      {/* <AppRedux /> */}

      {/* ----------task------- */}
      {/* <AppRedux1/> */}

      {/* -----CrudRedux----- */}
      {/* <AppRedux2 /> */}

        {/* -----CrudReduxTask----- */}
      <AppRedux3 />

{/* ----ReduxProjectApi--- */}
      {/* <AppProduct />  */}
    </div>
  );
}

export default App;
