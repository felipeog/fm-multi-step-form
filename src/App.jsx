import { Sidebar } from "./components/Sidebar";
import { Steps } from "./components/Steps";

export const App = () => {
  return (
    <div className="grid h-screen w-screen place-content-center bg-neutral-300 p-4">
      <main className="flex rounded-2xl bg-neutral-100 p-4 shadow-lg">
        <Sidebar />
        <Steps />
      </main>
    </div>
  );
};
