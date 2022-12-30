import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleMinus = () => setCount(count + 1);
  const handlePlus = () => setCount(count - 1);
  return (
    <>
      <div className="container my-5">
        <div className="col-4 mx-auto my-5">
          <h1 className="text-center me-5 my-5">{count}</h1>
          <button
            type="button"
            className="btn btn-success"
            onClick={handlePlus}
            disabled={count === 0 ? "disabled" : ""}
          >
            Counter Minus
          </button>
          <button
            type="button"
            className="btn btn-success mx-5"
            onClick={handleMinus}
          >
            Counter Plus
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
