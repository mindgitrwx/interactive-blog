import React from "react";
import { MiniTerminalTransitions } from "@code-hike/mini-terminal";

export default function App() {
  const [progress, setProgress] = React.useState(0);
  return (
    <div style={{ width: 500, margin: "50px auto" }}>
      <MiniTerminalTransitions
        title="backend.ai"
        height={300}
        progress={progress}
        steps={steps}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="range"
          max={steps.length - 1}
          step={0.01}
          style={{ width: "100%" }}
          onChange={(e) => setProgress(+e.target.value)}
          value={progress}
        />
        <div style={{ width: 60, paddingLeft: 20 }}>{progress}</div>
      </div>
    </div>
  );
}

const steps = [
  `$ lorem ipsum
dolor sit amet
consectetur adipiscing elit
$ sed do`,
  `$ eiusmod tempor incididunt
ut labore et dolore`,
  `$ magna aliqua
ut enim ad minim veniam
quis nostrud
exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat
$ duis aute irure dolor
in reprehenderit`,
  `$ in voluptate
velit esse cillum dolore
$ eu fugiat nulla pariatur`,
  `$ excepteur sint occaecat
cupidatat non proident
sunt in culpa qui
officia deserunt
$ mollit anim id est laborum
$ `
];
