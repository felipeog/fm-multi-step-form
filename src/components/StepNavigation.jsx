import { STEPS_LIST } from "../constants/steps";
import { stepValidator } from "../helpers/stepValidator";
import { store$ } from "../store";
import { Button } from "./Button";

export function StepNavigation() {
  const currentStep = store$.step.use();

  if (!currentStep) {
    return null;
  }

  const isFirst = currentStep.id === STEPS_LIST.at(0).id;
  const isLast = currentStep.id === STEPS_LIST.at(-1).id;
  const validateStep = stepValidator[currentStep.id];

  // move navigation to a hook?
  function previous() {
    const previousStep = STEPS_LIST.find(
      (step) => step.number === currentStep.number - 1,
    );

    store$.step.set(previousStep);
    store$.direction.set(-1);
  }

  function next() {
    if (!validateStep(store$)) {
      // put side-effect here?
      return;
    }

    const nextStep = STEPS_LIST.find(
      (step) => step.number === currentStep.number + 1,
    );

    store$.step.set(nextStep);
    store$.direction.set(1);
  }

  function confirm() {
    store$.step.set(null);
    store$.direction.set(1);
  }

  return (
    <div className="flex">
      {!isFirst && (
        <Button variant="link" onClick={previous}>
          Go back
        </Button>
      )}

      {isLast ? (
        <Button scheme="highlight" className="ml-auto" onClick={confirm}>
          Confirm
        </Button>
      ) : (
        <Button className="ml-auto" onClick={next}>
          Next step
        </Button>
      )}
    </div>
  );
}
