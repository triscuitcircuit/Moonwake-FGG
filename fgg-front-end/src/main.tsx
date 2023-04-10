import React from "react";
import App from "./Display/App";
import ReactDOM from "react-dom/client"
import {
    NextUIProvider,
    createTheme,
} from "@nextui-org/react";

// creates a dark theme using nextUI
const darkTheme = createTheme({
    type: "dark",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <NextUIProvider theme={darkTheme}>
        <App/>
    </NextUIProvider>
)