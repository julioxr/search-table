import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserProvider from "./context/DataProvider";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>
);
