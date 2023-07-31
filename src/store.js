import { observable } from "@legendapp/state";

import { RECURRENCES_LIST } from "./constants/recurrences";
import { STEPS_LIST } from "./constants/steps";
import { ERRORS, VALUES } from "./constants/form";

const store$ = observable({
  addons: [],
  direction: 0,
  form: {
    values: structuredClone(VALUES),
    errors: structuredClone(ERRORS),
  },
  plan: null,
  recurrence: structuredClone(RECURRENCES_LIST[0]),
  step: structuredClone(STEPS_LIST[0]),
});

export { store$ };
