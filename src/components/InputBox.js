import React from "react";
import "../styles/InputBox.scss";
import { AiOutlineSearch } from "react-icons/ai";

const InputBox = ({ setSearchInput }) => {
    return (
        <div className="input-box">
            <AiOutlineSearch />
            <input
                type="text"
                placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Potter, etc."
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>
    );
};

export default InputBox;
