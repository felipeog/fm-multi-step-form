import { useSelector } from "@legendapp/state/react";

import { store$ } from "./store";

function App() {
  const fullname = useSelector(
    () => `${store$.fname.get()} ${store$.lname.get()}`,
  );

  return <h1>{fullname}</h1>;
}

export default App;
