import { STEPS_LIST } from "../constants/steps";
import { useNavigation } from "../hooks/useNavigation";
import { StepIndicator } from "./StepIndicator";
import background from "../assets/bg-sidebar-desktop.svg";

export function Sidebar() {
  const { currentStep } = useNavigation();

  return (
    <nav
      className="rounded-lg bg-cover bg-bottom"
      style={{ backgroundImage: `url(${background})` }}
    >
      <ul className="grid gap-8 p-10">
        {STEPS_LIST.map((step) => (
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
