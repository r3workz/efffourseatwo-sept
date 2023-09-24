import React, { useState, useContext, useEffect } from "react";
import BooksContext from "../context/BooksContext";
import TextButton from "./TextButton";

import "../styles/ShowCase.css";

const BookShowCase = (props) => {
    const { book1Data, book2Data, book3Data } = useContext(BooksContext);
    const [dataReceived, setDataReceived] = useState(false);
    const [expanded, setExpanded] = useState({ stats: false, key: null });
    useEffect(() => {
        // Set dataReceived to true if book1Data, book2Data, book3Data are not empty
        if (
            book1Data.volumeInfo &&
            book2Data.volumeInfo &&
            book3Data.volumeInfo
        ) {
            setDataReceived(true);
        }
    }, [book1Data, book2Data, book3Data, expanded]);

    console.log(book2Data);
    return (
        <div>
            {/* Iff data recieved is true, display books */}

            {dataReceived && (
                <div className="bookshowContainer">
                    {/* If expanded.stats is true, display close button */}
                    {expanded.stats && (
                        <TextButton
                            className="closeButton"
                            text="X"
                            onClick={() => {
                                setExpanded({ stats: false, key: null });
                            }}
                        />
                    )}
                    <div
                        key="0"
                        className={
                            expanded.stats && expanded.key === 0
                                ? "bookView expanded"
                                : expanded.stats && expanded.key !== 0
                                ? "bookView hidden"
                                : "bookView"
                        }
                    >
                        <img
                            className="bookImg"
                            src={book1Data.volumeInfo.imageLinks.thumbnail}
                            alt=""
                        />
                        <div className="bookInfos">
                            <h1 className="bookTitle">{`${book1Data.volumeInfo.title}`}</h1>
                            {/* If expanded.stats is true, display author */}
                            {expanded.stats && (
                                <div className="bookAuthor">
                                    {book1Data.volumeInfo.authors}
                                </div>
                            )}
                            <div
                                className="bookDescription"
                                dangerouslySetInnerHTML={{
                                    __html: book1Data.volumeInfo.description,
                                }}
                            ></div>
                            {/* If expanded.stats is true, display Avg rating, Rating count, publisher and language */}
                            {expanded.stats && (
                                <div className="bookStats">
                                    {`Avg rating: ${book1Data.volumeInfo.averageRating} | Rating count: ${book1Data.volumeInfo.ratingsCount} | Publisher: ${book1Data.volumeInfo.publisher} | Language: ${book1Data.volumeInfo.language}`}
                                </div>
                            )}
                            <TextButton
                                text="Now Read!"
                                onClick={() =>
                                    expanded.stats
                                        ? window.open(
                                              book1Data.volumeInfo.previewLink,
                                              "_blank"
                                          )
                                        : setExpanded({ stats: true, key: 0 })
                                }
                            />
                        </div>
                    </div>
                    <div
                        key="1"
                        className={
                            expanded.stats && expanded.key === 1
                                ? "bookView expanded"
                                : expanded.stats && expanded.key !== 1
                                ? "bookView hidden"
                                : "bookView"
                        }
                    >
                        <img
                            className="bookImg"
                            src={book2Data.volumeInfo.imageLinks.thumbnail}
                            alt=""
                        />
                        <div className="bookInfos">
                            <h1 className="bookTitle">{`${book2Data.volumeInfo.title}`}</h1>
                            {/* If expanded.stats is true, display author */}
                            {expanded.stats && (
                                <div className="bookAuthor">
                                    {book2Data.volumeInfo.authors}
                                </div>
                            )}
                            <div
                                className="bookDescription"
                                dangerouslySetInnerHTML={{
                                    __html: book2Data.volumeInfo.description,
                                }}
                            ></div>
                            {/* If expanded.stats is true, display Avg rating, Rating count, publisher and language */}
                            {expanded.stats && (
                                <div className="bookStats">
                                    {`Avg rating: ${book2Data.volumeInfo.averageRating} | Rating count: ${book2Data.volumeInfo.ratingsCount} | Publisher: ${book2Data.volumeInfo.publisher} | Language: ${book2Data.volumeInfo.language}`}
                                </div>
                            )}
                            <TextButton
                                text="Now Read!"
                                onClick={() =>
                                    expanded.stats
                                        ? window.open(
                                              book2Data.volumeInfo.previewLink,
                                              "_blank"
                                          )
                                        : setExpanded({ stats: true, key: 1 })
                                }
                            />
                        </div>
                    </div>
                    <div
                        key="2"
                        className={
                            expanded.stats && expanded.key === 2
                                ? "bookView expanded"
                                : expanded.stats && expanded.key !== 2
                                ? "bookView hidden"
                                : "bookView"
                        }
                    >
                        <img
                            className="bookImg"
                            src={book3Data.volumeInfo.imageLinks.thumbnail}
                            alt=""
                        />
                        <div className="bookInfos">
                            <h1 className="bookTitle">{`${book3Data.volumeInfo.title}`}</h1>
                            {/* If expanded.stats is true, display author */}
                            {expanded.stats && (
                                <div className="bookAuthor">
                                    {book3Data.volumeInfo.authors}
                                </div>
                            )}
                            <div
                                className="bookDescription"
                                dangerouslySetInnerHTML={{
                                    __html: book3Data.volumeInfo.description,
                                }}
                            ></div>
                            {/* If expanded.stats is true, display Avg rating, Rating count, publisher and language */}
                            {expanded.stats && (
                                <div className="bookStats">
                                    {`Avg rating: ${book3Data.volumeInfo.averageRating} | Rating count: ${book3Data.volumeInfo.ratingsCount} | Publisher: ${book3Data.volumeInfo.publisher} | Language: ${book3Data.volumeInfo.language}`}
                                </div>
                            )}
                            <TextButton
                                text="Now Read!"
                                onClick={() =>
                                    expanded.stats
                                        ? window.open(
                                              book3Data.volumeInfo.previewLink,
                                              "_blank"
                                          )
                                        : setExpanded({ stats: true, key: 2 })
                                }
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookShowCase;
