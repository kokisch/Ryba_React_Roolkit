import React from "react";
import App from "./app/App";
import {createRoot} from "react-dom/client";
import {StoreProvider} from "app/providers/StoreProvider";
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
    <StoreProvider >
        <App/>
    </StoreProvider>
);
