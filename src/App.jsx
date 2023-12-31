import { ToastContainer } from "react-toastify";

import { Sidebar } from "./components/Sidebar";
import { Steps } from "./components/Steps";

export const App = () => {
  return (
    <div className="grid h-screen min-h-[600px] w-screen min-w-[900px] place-content-center bg-neutral-300 p-4">
      <main className="flex rounded-2xl bg-neutral-100 p-4 shadow-lg">
        <Sidebar />
        <Steps />
      </main>

      <ToastContainer
        position="bottom-left"
        hideProgressBar
        draggable={false}
        closeButton={false}
        toastClassName={() => {
          return "relative flex p-1 min-h-10 rounded-lg justify-between overflow-hidden cursor-pointer bg-neutral-100 shadow-md";
        }}
        bodyClassName={() => {
          return "text-sm block p-3 text-primary-400 flex gap-1";
        }}
      />
    </div>
  );
};
