import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useMemo
} from "react";
import Toggle from "./Toggle";
import Counter from "./Counter";
import { useTitleInput } from "./hooks/useTitleInput";

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  const reverseWord = word => {
    console.log("function called");
    return word
      .split("")
      .reverse()
      .join("");
  };

  const title = "React Hooks Demo";

  const TitleReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <div className="main-wrapper" ref={ref}>
      <h1>{TitleReversed}</h1>
      {/* <Counter /> */}
      {/* <Toggle /> */}
      <form
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
      </form>
    </div>
  );
};

export default App;
