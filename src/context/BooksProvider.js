import React, { useState } from "react";
import BooksContext from "./BooksContext";
const BooksProvider = (props) => {
    const [book1Data, setBook1Data] = useState([]);
    const [book2Data, setBook2Data] = useState([]);
    const [book3Data, setBook3Data] = useState([]);
    const [booksData, setBooksData] = useState([]);
    return (
        <BooksContext.Provider
            value={{
                book1Data,
                setBook1Data,
                book2Data,
                setBook2Data,
                book3Data,
                setBook3Data,
                booksData,
                setBooksData,
            }}
        >
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
