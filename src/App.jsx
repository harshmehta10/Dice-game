import { useState } from "react";
import "./App.css";
import Start from "./components/Start";
import Game from "./components/Game";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Start />
    </>
  );
}

export default App;
