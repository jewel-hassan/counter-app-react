import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Count />
      </div>
    </>
  );
}
export default App;

function Count() {
  const [count, setCount] = useState(0);

  const onChange = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const decreseChange = () => {
    const newdecrease = count - 1;
    setCount(newdecrease);
  };

  const resetCount = () => {
    setCount((count) => (count = 0));
  };
  return (
    <div className="container">
      <h1>Count:{count}</h1>
      <div className="box">
        <button onClick={onChange}>Increase</button>
        <button onClick={decreseChange}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}
