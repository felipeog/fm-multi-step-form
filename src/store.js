import { observable } from "@legendapp/state";

import { ADDONS_LIST } from "./constants/addons";
import { PLANS_LIST } from "./constants/plans";
import { RECURRENCES_LIST } from "./constants/recurrences";
import { STEPS_LIST } from "./constants/steps";

// breake in multipe stores?
const store$ = observable({
  step: structuredClone(STEPS_LIST[0]),
  direction: 0,
  isFormValid: false,
  plan: structuredClone(PLANS_LIST[0]),
  recurrence: structuredClone(RECURRENCES_LIST[1]),
  addons: [structuredClone(ADDONS_LIST[0]), structuredClone(ADDONS_LIST[1])],
});

export { store$ };
