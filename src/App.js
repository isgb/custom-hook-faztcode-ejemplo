import "./App.css";
import { useState } from "react";

function useMyHook(initialState = false) {
  const [active, setActive] = useState(initialState);

  const handleToggle = () => setActive(!active);
  const handleTrue = () => setActive(true);
  const handleFalse = () => setActive(false);

  // return {
  //   active,
  //   handleToggle,
  //   handleTrue,
  //   handleFalse,
  // };
  return [ active,
    {handleToggle,
    handleTrue,
    handleFalse,}
  ];
}

function ShowInfo() {
  // const { active, handleToggle } = useMyHook(false);
  const [ active, {handleToggle} ]  = useMyHook(false);

  return (
    <div>
      <div style={{ background: "#000", color: "white" }}>
        <button onClick={() => handleToggle()}>Show/Hide</button>

        {active && (
          <div>
            <h1>Show user!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [ active, {handleToggle, handleFalse, handleTrue}  ] = useMyHook();

  return (
    <div>
      {/* https://www.youtube.com/watch?v=xutmKvLsbKM */}
      <button onClick={handleToggle}>Click</button>

      <button onClick={handleTrue}>True</button>

      <button onClick={handleFalse}>False</button>

      {active.toString()}

      <ShowInfo />
    </div>
  );
}

export default App;
