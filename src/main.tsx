import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "../src/components/ErrortBoundary.tsx";
import "./index.css";

// Suppress benign ResizeObserver layout loop notifications
const resizeObserverErrRegex = /ResizeObserver loop/;
window.addEventListener("error", (e) => {
  if (resizeObserverErrRegex.test(e.message)) {
    e.stopImmediatePropagation();
    e.preventDefault();
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
