import { useState } from "react";
import "./App.css";
import LoginRegistrationPage from "./Module1/LoginRegistrationPage";
import SubtotalCalculator from "./Module2/SubtotalCalculator";
import ListView from "./Module3/ListView";
import Counter from "./Module3/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* --------Module1-------- */}
      {/* <LoginRegistrationPage /> */}

      {/* ----Module2------ */}
      {/* <SubtotalCalculator /> */}

      {/* ------Module3---- */}
      {/* <ListView /> */}
      <Counter />
    </div>
  );
}

export default App;
