import React from "react";
import ReactDOM from "react-dom/client";
import { enableReactUse } from "@legendapp/state/config/enableReactUse";

import App from "./App.jsx";
import "./index.css";

enableReactUse();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
