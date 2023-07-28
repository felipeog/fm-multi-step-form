import { configureObservablePersistence } from "@legendapp/state/persist";
import { observable } from "@legendapp/state";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { persistObservable } from "@legendapp/state/persist";

configureObservablePersistence({
  persistLocal: ObservablePersistLocalStorage,
});

const store$ = observable({ fname: "hello", lname: "there" });

persistObservable(store$, {
  local: "store",
});

export { store$ };
