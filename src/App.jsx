import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(9);
  return (
    <>
    <div>
      <div>
      <button onClick={() =>setCount((prevCount) =>prevCount + 1  )} >increment + </button>
      <h2>{count}</h2>
      </div><br /><br />
      <div>
      <button onClick={() =>setCounter((prevCount) =>prevCount - 1  )} > decrement - </button>
      <h2>{counter}</h2>
      </div>
    </div>
    </>
  );
};

export default App;
