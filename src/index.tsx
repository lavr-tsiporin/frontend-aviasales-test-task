import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContexProvider } from "./store/Store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ContexProvider>
      <App />,
    </ContexProvider>
  </React.StrictMode>,
);
