import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import BooksProvider from "./context/BooksProvider";

import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <BooksProvider>
            <App />
        </BooksProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
