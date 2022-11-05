import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import "./scss/app.scss";

import store from "./redux/store.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
store.subscribe(() => console.log(store.getState()));

function plus() {
    store.dispatch({ type: "PLUS" });
}

function minus() {
    store.dispatch({ type: "MINUS" });
}

root.render(
    // <React.StrictMode>
    <Router>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    // </React.StrictMode>
);
