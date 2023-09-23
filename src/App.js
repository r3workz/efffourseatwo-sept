import React, { useContext, useEffect } from "react";
import NavBar from "./components/NavBar";

import BooksContext from "./context/BooksContext";
import BooksGrid from "./components/BooksGrid";

// import process for environment variables

function App() {
    // const [bookData, setBookData] = useState([]);

    const books = useContext(BooksContext);

    useEffect(() => {
        fetch(
            `https://www.googleapis.com/books/v1/volumes/0bFYtAEACAAJ?key=${process.env.REACT_APP_AJ_API_KEY}`
        )
            .then((res) => res.json())
            .then(async (data) => {
                books.setBook1Data(data);
            });
        fetch(
            `https://www.googleapis.com/books/v1/volumes/FMkKogEACAAJ?key=${process.env.REACT_APP_AJ_API_KEY}`
        )
            .then((res) => res.json())
            .then(async (data) => {
                books.setBook2Data(data);
            });
        fetch(
            `https://www.googleapis.com/books/v1/volumes/Rpv0BQAAQBAJ?key=${process.env.REACT_APP_AJ_API_KEY}`
        )
            .then((res) => res.json())
            .then(async (data) => {
                books.setBook3Data(data);
            });
        fetch(
            "https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=40"
        )
            .then((res) => res.json())
            .then(async (data) => {
                books.setBooksData(data);
            });
    }, []);

    console.log(books);

    return (
        <div className="App">
            <NavBar />
            <BooksGrid />
        </div>
    );
}

export default App;
