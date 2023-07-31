import { useCallback } from "react";
import { useSelector } from "@legendapp/state/react";

import { store$ } from "../store";
import { STEPS_LIST } from "../constants/steps";
import { stepValidator } from "../helpers/stepValidator";

export function useNavigation() {
  const currentStep = useSelector(store$.step) ?? {};
  const isFirst = currentStep.id === STEPS_LIST.at(0).id;
  const isLast = currentStep.id === STEPS_LIST.at(-1).id;
  const validateStep = stepValidator[currentStep.id];

  const previous = useCallback(() => {
    const previousStep = STEPS_LIST.find(
      (step) => step.number === currentStep.number - 1,
    );

    store$.step.set(previousStep);
    store$.direction.set(-1);
  }, [currentStep.number]);

  const next = useCallback(() => {
    if (!validateStep(store$)) {
      // put side-effect here?
      return;
    }

    const nextStep = STEPS_LIST.find(
      (step) => step.number === currentStep.number + 1,
    );

    store$.step.set(nextStep);
    store$.direction.set(1);
  }, [currentStep.number, validateStep]);

  const confirm = useCallback(() => {
    store$.step.set(null);
    store$.direction.set(1);
  }, []);

  return {
    currentStep,
    isFirst,
    isLast,
    previous,
    next,
    confirm,
  };
}
