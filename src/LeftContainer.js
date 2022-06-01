import { useState } from "react";
import TextInput from "./TextInput";
import ButtonGroup from "./ButtonGroup";

const TEXT = [
  "Apply to work with our agency",
  "what's your budget?",
  "Anything else we should know?",
  "Thank you!"
];

export default function LeftContainer({ stage, setStage }) {
  const [email, setEmail] = useState("");
  const [buttonSelection, setButtonSelection] = useState("");
  const [details, setDetails] = useState("");

  let content;
  if (stage === 0) {
    content = (
      <TextInput placeholder="what's your email" updateValue={setEmail} />
    );
  } else if (stage === 1) {
    content = <ButtonGroup updateValue={setButtonSelection} />;
  } else if (stage === 2) {
    content = <TextInput updateValue={setDetails} />;
  } else if (stage === 3) {
    alert(JSON.stringify({ email, buttonSelection, details }));
  }
  return (
    <div className="left-container">
      <div className="left-content">
        <h3 className="title"> {TEXT[stage]}</h3>
        {content}
        {stage !== 3 && (
          <button className="button" onClick={() => setStage(stage + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
