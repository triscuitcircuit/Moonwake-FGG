// Creates the main page. App defined in App.tsx from /Display

import React from "react";
import App from "./Display/App";
import {createRoot} from "react-dom/client";


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
