import { useState } from "react";

import { StepIndicator } from "./components/StepIndicator";

export function App() {
  const [number, setNumber] = useState(1);

  return (
    <main className="min-h-screen bg-primary-300">
      <StepIndicator
        number={1}
        name="a step"
        active={number === 1}
        onClick={() => setNumber(1)}
      />

      <StepIndicator
        number={2}
        name="other step"
        active={number === 2}
        onClick={() => setNumber(2)}
      />
    </main>
  );
}
