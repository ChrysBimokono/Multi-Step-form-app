import "./styles.css";
import React, { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightImage from "./RightImage";

export default function App() {
  const [stage, setStage] = useState(0);

  return (
    <div className="App">
      <LeftContainer stage={stage} setStage={setStage} />
      <RightImage stage={stage} />
    </div>
  );
}
