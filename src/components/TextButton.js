import React from "react";

const TextButton = (props) => {
    return (
        <button
            className={`textButton ${props.className}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default TextButton;
