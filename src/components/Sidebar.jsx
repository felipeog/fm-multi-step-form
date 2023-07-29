import { STEPS } from "../constants";
import { store$ } from "../store";
import { StepIndicator } from "./StepIndicator";
import background from "../assets/bg-sidebar-desktop.svg";

export function Sidebar() {
  const currentStep = store$.step.use();

  return (
    <nav
      className="rounded-lg bg-cover bg-bottom"
      style={{ backgroundImage: `url(${background})` }}
    >
      <ul className="grid gap-8 p-10">
        {STEPS.map((step) => (
          <li key={step.id}>
            <StepIndicator
              number={step.number}
              name={step.name}
              active={step.id === currentStep?.id}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
