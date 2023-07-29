import { useSelector } from "@legendapp/state/react";

import { store$ } from "./store";
import { Header } from "./components/Header";

function App() {
  const fullname = useSelector(
    () => `${store$.fname.get()} ${store$.lname.get()}`,
  );

  return (
    <main className="min-h-screen bg-primary-100">
      <h1>{fullname}</h1>

      <Header title="Personal info" subtitle="Please, provide your name" />
      <Header
        title="Thank you!"
        subtitle="If you need support, email us"
        className="text-center"
      />
    </main>
  );
}

export default App;
