import { useState } from "react";
import "./App.css";
import LoginRegistrationPage from "./Module1/LoginRegistrationPage";
import SubtotalCalculator from "./Module2/SubtotalCalculator";
import ListView from "./Module3/ListView";
import Counter from "./Module3/Counter";
import LifeCycleCom from "./Module4/LifeCycleMethod/LifeCycleCom";
import LoginPopUp from "./Module4/LifeCycleMethod/LoginPopUp";
import App1 from "./Module6/components/App1";
import Header from "./Module5  Styling & Advance React/components/header/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* --------Module1-------- */}
      <LoginRegistrationPage />

      {/* ----Module2------ */}
      {/* <SubtotalCalculator /> */}

      {/* ------Module3---- */}
      {/* <ListView /> */}
      {/* <Counter /> */}

      {/* -------Module4--------- */}
      {/* <LifeCycleCom /> */}
      {/* <LoginPopUp /> */}

      {/* ------Module5-------- */}
      {/* <Header /> */}

      {/* ------Module6-------- */}
      {/* <App1 /> */}
    </div>
  );
}

export default App;
