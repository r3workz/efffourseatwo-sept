import React, { useContext } from "react";
import BookGridItem from "./BookGridItem";
import BooksContext from "../context/BooksContext";

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridGap: "0.5rem",
    padding: "0 5%",
};

const BooksGrid = () => {
    const books = useContext(BooksContext);

    return (
        <div style={gridStyle} className="book-grid">
            {books.booksData.items &&
                books.booksData.items.map((book) => (
                    <BookGridItem itemData={book} />
                ))}
        </div>
    );
};

export default BooksGrid;
