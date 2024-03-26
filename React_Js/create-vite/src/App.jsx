import { ToastContainer } from "react-toastify";
import "./App.css";
import ClassCom from "./2.Componenets/class/ClassCom";
import FunctionalCom from "./2.Componenets/functional/FunctionalCom";
import StyleHome from "./3.Styling/StyleHome";
import ClassProps from "./4.props/class/ClassProps";
import FunProps from "./4.props/functional/FunProps";
import FragmentCom from "./5.Map-Key/FragmentCom";
import MapAndKey from "./5.Map-Key/MapAndKey";
import MapProject from "./5.Map-Key/MapProject";
import ClassState from "./6.State/Class/ClassState";
import StatePro from "./6.State/StatePro";
import FunState from "./6.State/functional/FunState";
import ConRendaring from "./7.Conditional-rendaring/ConRendaring";
import Conditoin2 from "./7.Conditional-rendaring/Condition2";
import Home from "./8.project/Home";
import LifeCycleCom from "./9.LifeCycleMethod/LifeCycleCom";
import LoginPopUp from "./9.LifeCycleMethod/LoginPopUp";
import UseEffect from "./10.Hook/useEffect/UseEffect";
import UseEffectPro from "./10.Hook/useEffect/UseEffectPro";
import InputCom from "./11.Input/InputCom";
import MultiInput from "./11.Input/multiInput";
import MultipleInput1 from "./11.Input/MultipleInput1";
import MultipleInput2 from "./11.Input/MultipleInput2";
import CheckBox from "./11.Input/CheckBox";
import Radio from "./11.Input/Radio";
import LocalStorageCom from "./12.LocalStorage/LocalStorageCom";
import MultiUser from "./11.Input/MultiUser";
import SelectCom from "./11.Input/SelectCom";
import SelectCom1 from "./11.Input/SelectCom1";
import Router from "./13.router/Router";
import ProtectedRouter from "./14.ProtectedRoute/Router";
import SearchParam from "./12.LocalStorage/SearchParam";
import ProtectedProject from "./15.ProtectedProject/Router";
import InputCom1 from "./11.Input/InputCom1";
import UseContaxtCom from "./10.Hook/useContaxt/UseContaxtCom";
import InputCom2 from "./11.Input/Inputcom2";
function App() {
  return (
    <div className="appDiv">
      {/* <---------------------COMPONENET------------------------> */}
      {/* <FunctionalCom /> */}
      {/* <ClassCom /> */}

      {/* <---------------------STYLE------------------------> */}
      {/* <StyleHome /> */}

      {/* <---------------------PROPS------------------------> */}
      {/* <FunProps name={"Happy User"} /> */}
      {/* <ClassProps /> */}

      {/* <---------------------FRAGMENT - MAP-KEY------------------------> */}
      {/* <MapAndKey /> */}
      {/* <FragmentCom /> */}
      {/* <MapProject/> */}

      {/* <---------------------FUNSTATE------------------------> */}
      {/* <FunState /> */}
      {/* <ClassState /> */}
      {/* <StatePro /> */}

      {/* <---------------------CONTIDIONAL RENDARING------------------------> */}
      {/* <ConRendaring /> */}
      {/* <Condition2 /> */}
      {/* <Home /> */}

      {/* <---------------------LIFECYCLE METHOD------------------------> */}
      {/* <LifeCycleCom /> */}
      {/* <LoginPopUp /> */}

      {/* <---------------------HOOK------------------------> */}
      {/* <UseEffect /> */}
      {/* <UseEffectPro /> */}
      {/* <UseContaxtCom /> */}

      {/* ----InputCom------- */}
      {/* <InputCom/> */}

      {/* ------Task------ */}
      {/* <InputCom1 /> */}
      <InputCom2 />

      {/* ------------MultiInput------------ */}
      {/* <MultiInput /> */}

      {/* -------MultipleInput1-------- */}
      {/* <MultipleInput1 /> */}

      {/* ---------MultipleInput2----------- */}
      {/* <MultipleInput2 /> */}
      <ToastContainer />

      {/* ----------MultiUser----------- */}
      {/* <MultiUser /> */}

      {/*----------CheckBox---------- */}
      {/* <CheckBox /> */}

      {/* ------Radio--------- */}
      {/* <Radio /> */}

      {/* --------LocalStorage-------- */}
      {/* <LocalStorageCom /> */}

      {/* --------SelectCom----------- */}
      {/* <SelectCom /> */}
      {/* --------SelectCom1--------- */}
      {/* <SelectCom1 /> */}

      {/* --------ROUTER--------- */}
      {/* <Router /> */}

{/* --------SearchParam-------- */}
      {/* <SearchParam /> */}

      {/*---------ProtectedRouter-------- */}
      {/* <ProtectedRouter /> */}


      {/* --------ProtectedProject------- */}
      {/* <ProtectedProject /> */}
    </div>
  );
}

export default App;
