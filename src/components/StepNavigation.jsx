import { STEPS } from "../constants";
import { store$ } from "../store";
import { Button } from "./Button";

export function StepNavigation() {
  const currentStep = store$.step.use();
  const isFormValid = store$.isFormValid.use();

  if (!currentStep) {
    return null;
  }

  const isFirst = currentStep.id === STEPS.at(0).id;
  const isLast = currentStep.id === STEPS.at(-1).id;

  // move navigation to a hook?
  function previous() {
    const previousStep = STEPS.find(
      (step) => step.number === currentStep.number - 1,
    );

    store$.step.set(previousStep);
    store$.direction.set(-1);
  }

  function next() {
    if (isFirst && !isFormValid) {
      // render toast?
      return;
    }

    const nextStep = STEPS.find(
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
