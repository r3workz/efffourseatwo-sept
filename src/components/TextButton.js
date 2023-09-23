import React from "react";
import "../styles/TextButton.scss";

const TextButton = (props) => {
    return (
        <button className="textButton" onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default TextButton;
