import React from "react";
import ReactDOM from "react-dom/client"; // notez l'importation à partir de 'react-dom/client'
import App from "./App";

// Assurez-vous que la racine est créée correctement avec ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root")); // React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
