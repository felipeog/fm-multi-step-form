import { store$ } from "./store";

function App() {
  return (
    <main className="min-h-screen bg-primary-100">
      <pre>{JSON.stringify(store$.get(), null, 2)}</pre>
    </main>
  );
}

export default App;
