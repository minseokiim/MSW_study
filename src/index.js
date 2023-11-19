import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browsers");
  return worker.start();
}

enableMocking().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
