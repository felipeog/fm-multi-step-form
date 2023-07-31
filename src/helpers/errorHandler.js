import { toast } from "react-toastify";

import { STEPS } from "../constants/steps";

function step1(store$, error) {
  store$.form.errors.set(error.payload);
  toast.error(error.message, {
    toastId: "form-error",
  });
}

function step2(_store$, error) {
  toast.error(error.message, {
    toastId: "plan-error",
  });
}

function noHandling() {}

export const errorHandler = {
  [STEPS["your-info"].id]: step1,
  [STEPS["select-plan"].id]: step2,
  [STEPS["add-ons"].id]: noHandling,
  [STEPS["summary"].id]: noHandling,
};
