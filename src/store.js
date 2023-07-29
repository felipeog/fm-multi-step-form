import { observable } from "@legendapp/state";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { persistObservable } from "@legendapp/state/persist";

import { ADDONS, PLANS, RECURRENCE } from "./constants";

const store$ = observable({
  name: "",
  email: "",
  phone: "",
  plan: PLANS[0],
  recurrence: RECURRENCE[0],
  addons: [ADDONS[0], ADDONS[1]],
});

persistObservable(store$, {
  local: "store",
  persistLocal: ObservablePersistLocalStorage,
});

export { store$ };
