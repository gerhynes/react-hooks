import React, { useState, useEffect, useRef, createContext } from "react";
import Toggle from "./Toggle";
import Counter from "./Counter";
import { useTitleInput } from "./hooks/useTitleInput";

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  return (
    <div className="main-wrapper" ref={ref}>
      <h1>Hooks Demo</h1>
      <Counter />
      {/* <Toggle /> */}
      {/* <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form> */}
    </div>
  );
};

export default App;
