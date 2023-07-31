import { useNavigation } from "../hooks/useNavigation";
import { Button } from "./Button";

export function StepNavigation() {
  const { currentStep, isFirst, isLast, previous, next, confirm } =
    useNavigation();

  if (!currentStep?.id) {
    return null;
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
