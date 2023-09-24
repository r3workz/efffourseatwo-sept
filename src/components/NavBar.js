import React, { useState, useEffect } from "react";
import "../styles/NavStyle.css";
import logo from "../assets/logo.png";
import textLogo from "../assets/logo-text.png";
import InputBox from "./InputBox";
import { BiBookHeart } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import userAvatar from "../assets/avatar.png";
import person from "../assets/person-premium.svg";
import BooksContext from "../context/BooksContext";
import { useContext } from "react";

const NavBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const books = useContext(BooksContext);

    useEffect(() => {
        // search for books and update booksData
        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&maxResults=40`
        )
            .then((res) => res.json())
            .then((data) => {
                books.setBooksData(data);
            });
    }, [searchInput]);

    return (
        <nav>
            <div className="navSecL">
                <img className="logo" src={logo} alt="Logo" />
                <img className="logo" src={textLogo} alt="textLogo" />
            </div>
            <div className="navSecM">
                <InputBox
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
            </div>
            <div className="navSecR">
                <BiBookHeart className="iconBtn" />
                <IoNotificationsOutline className="iconBtn" />
                <img className="iconBtn" src={person} alt="premium" />
                <img className="iconBtn" src={userAvatar} alt="userAvatar" />
            </div>
        </nav>
    );
};

export default NavBar;
