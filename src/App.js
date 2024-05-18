import './App.css';
import { useState } from 'react';

function App() {

  const [active, setActive] = useState(true)
  const handleToggle = () => setActive(!active)
  const handleTrue = () => setActive(true)
  const handleFalse = () => setActive(false)

  return (
    <div>
{/* https://www.youtube.com/watch?v=xutmKvLsbKM */}
      <button onClick={handleToggle}>
        Click
      </button>

      <button onClick={handleTrue}>
        True
      </button>

      <button onClick={handleFalse}>
        False
      </button>

      {active.toString()}

    </div>
  );
}

export default App;
