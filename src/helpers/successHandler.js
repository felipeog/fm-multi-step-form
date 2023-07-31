import { STEPS } from "../constants/steps";
import { ERRORS } from "../constants/form";

function step1(store$) {
  store$.form.errors.set(structuredClone(ERRORS));
}

function noHandling() {}

export const successHandler = {
  [STEPS["your-info"].id]: step1,
  [STEPS["select-plan"].id]: noHandling,
  [STEPS["add-ons"].id]: noHandling,
  [STEPS["summary"].id]: noHandling,
};
