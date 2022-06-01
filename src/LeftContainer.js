const TEXT = [
  "Apply to work with our agency",
  "what's your budget?",
  "Anything else we should know?",
  "Thank you!"
];

export default function LeftContainer({ stage, setStage }) {
  let content;
  if (stage === 0) {
    content = <input type="text" placeholder="what's your email" />;
  } else if (stage === 1) {
    content = (
      <div className="content-stage1">
        <button> $2k</button>
        <button>$5k</button>
        <button>No limit</button>
      </div>
    );
  } else if (stage === 2) {
    content = <div className="content-stage2"></div>;
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
