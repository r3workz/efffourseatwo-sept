import React, { useState } from "react";
import "../styles/InputBox.css";
import TextButton from "./TextButton";
import { AiOutlineSearch } from "react-icons/ai";

const InputBox = ({ searchInput, setSearchInput }) => {
    const [input, setInput] = useState("");
    const searchforBooks = () => {
        setSearchInput(input);
        setInput("");
    };
    return (
        <div className="search">
            <div className="input-box">
                <AiOutlineSearch />
                <input
                    type="text"
                    placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Potter, etc."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <TextButton text="Search" onClick={searchforBooks} />
        </div>
    );
};

export default InputBox;
