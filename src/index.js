import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import BooksProvider from "./context/BooksProvider";

import "./styles/index.css";

ReactDOM.render(
    <BooksProvider>
        <App />
    </BooksProvider>,
    document.getElementById("root")
);
