import { observable } from "@legendapp/state";

import { ADDONS, PLANS, RECURRENCE, STEPS } from "./constants";

const store$ = observable({
  step: structuredClone(STEPS[0]),
  direction: 0,
  // name: "",
  // email: "",
  // phone: "",
  isFormValid: false,
  plan: structuredClone(PLANS[0]),
  recurrence: structuredClone(RECURRENCE[0]),
  addons: [structuredClone(ADDONS[0]), structuredClone(ADDONS[1])],
});

export { store$ };
