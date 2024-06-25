import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartItemProvider } from "./components/CartItemProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CartItemProvider>
            <App />
        </CartItemProvider>
    </React.StrictMode>
);
