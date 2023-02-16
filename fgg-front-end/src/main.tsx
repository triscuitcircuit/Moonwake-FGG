import React from "react";
import App from "./Display/App";
//import {createRoot} from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google"
import ReactDOM from "react-dom/client"
import {
     NextUIProvider,
     createTheme,
} from "@nextui-org/react";

// creates a dark theme using nextUI
const darkTheme = createTheme({
     type: "dark",
});

// this is only temporary for simple google sign in
// for the real deal we probably want to import the value from .env like back-end
// see info here: https://console.cloud.google.com/getting-started?authuser=4&project=winged-hue-378023
// moonwakefgg@gmail.com
// cApsTone2023
const GOOGLE_CLIENT_ID = "425517943988-kp6g5nctrem3pnnf83b5p8hti86g8hij.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <NextUIProvider theme={darkTheme}>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <App />
        </GoogleOAuthProvider>
    </NextUIProvider>
)

// Old version:
// const root = createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
