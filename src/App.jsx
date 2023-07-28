import { useSelector } from "@legendapp/state/react";

import { store$ } from "./store";
import { Button } from "./components/Button";

function App() {
  const fullname = useSelector(
    () => `${store$.fname.get()} ${store$.lname.get()}`,
  );

  return (
    <>
      <h1>{fullname}</h1>

      <Button variant="solid" scheme="regular">
        solid regular
      </Button>

      <Button variant="solid" scheme="highlight">
        solid highlight
      </Button>

      <Button variant="link" scheme="regular">
        link regular
      </Button>

      <Button variant="link" scheme="highlight">
        link highlight
      </Button>
    </>
  );
}

export default App;
