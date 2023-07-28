import { useSelector } from "@legendapp/state/react";

import { store$ } from "./store";

function App() {
  const fullname = useSelector(
    () => `${store$.fname.get()} ${store$.lname.get()}`,
  );

  return <div>{fullname}</div>;
}

export default App;
