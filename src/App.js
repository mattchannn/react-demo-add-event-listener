import { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const updateStep = useCallback(
    (e) => {
      console.log(">> updating...");
      setStep(step + 1);
    },
    [step]
  );
  useEffect(() => {
    console.log(">> Adding event listener");
    const button = document.querySelector(".btn");
    button.addEventListener("click", updateStep, false);
    return () => {
      console.log(">> Removing event listener");
      button.removeEventListener("click", updateStep);
    };
  }, [updateStep]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ display: "flex" }}>
          <button style={{ padding: "0.5rem", marginRight: "1rem" }} className="btn">
            Increment
          </button>
          <div>Step: {step}</div>
        </div>
      </header>
    </div>
  );
}

export default App;

