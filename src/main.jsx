import "./index.css"; // ⬅️ Add this line to import Tailwind styles
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assuming App uses default export

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
