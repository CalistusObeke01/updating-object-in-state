import React, { useState } from "react";
import SpreadClone from "./SpreadClone";
import ImmerClone from "./ImmerClone";
import "./styles.css";

// Object is mutable by default, but State in React
// should be treated as read-only(Immutable).
// Hence, to update object in state, you need to
// create a new one (or make a copy of an existing one),
// and then set the state to use that copy

export default function App() {
  const [showSIClone, setClone] = useState(false);

  return (
    <div className="App">
      <h1 style={{ marginBottom: "-14px" }}>Updating object in state</h1>
      <p style={{ marginBottom: "2em" }}>
        Updating object with spread syntax and immer
      </p>
      <div className="container">
        <div className="flex-item">
          <button onClick={() => setClone(!showSIClone)} className="flip-btn">
            {showSIClone ? "Immer clone" : "Spread clone"}
          </button>
        </div>
        <div className="flex-item">
          {showSIClone ? <SpreadClone /> : <ImmerClone />}
        </div>
      </div>
    </div>
  );
}
