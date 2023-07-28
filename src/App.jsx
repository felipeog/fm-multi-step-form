import { observable } from "@legendapp/state";
import { useSelector } from "@legendapp/state/react";

const state$ = observable({ fname: "hello", lname: "there" });

function App() {
  const fullname = useSelector(
    () => `${state$.fname.get()} ${state$.lname.get()}`,
  );

  return <div>{fullname}</div>;
}

export default App;
