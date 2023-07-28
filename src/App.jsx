import { useSelector } from "@legendapp/state/react";

import { store$ } from "./store";

function App() {
  const fullname = useSelector(
    () => `${store$.fname.get()} ${store$.lname.get()}`,
  );

  return (
    <>
      <h1>{fullname}</h1>

      <div className="h-20 w-20 bg-primary-100"></div>
      <div className="h-20 w-20 bg-primary-200"></div>
      <div className="h-20 w-20 bg-primary-300"></div>
      <div className="h-20 w-20 bg-primary-400"></div>
      <div className="h-20 w-20 bg-secondary"></div>
      <div className="h-20 w-20 bg-neutral-100"></div>
      <div className="h-20 w-20 bg-neutral-200"></div>
      <div className="h-20 w-20 bg-neutral-300"></div>
      <div className="h-20 w-20 bg-neutral-400"></div>
      <div className="h-20 w-20 bg-neutral-500"></div>
    </>
  );
}

export default App;
