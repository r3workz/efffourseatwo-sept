import React, { useState, useEffect } from "react";
import "../styles/NavStyle.scss";
import logo from "../assets/logo.png";
import textLogo from "../assets/logo-text.png";
import InputBox from "./InputBox";
import { BiBookHeart } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import userAvatar from "../assets/avatar.png";
import person from "../assets/person-premium.svg";

import TextButton from "./TextButton";

const NavBar = () => {
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        console.log("searchInput");
    }, []);

    return (
        <nav>
            <div className="navSecL">
                <img className="logo" src={logo} alt="Logo" />
                <img className="logo" src={textLogo} alt="textLogo" />
            </div>
            <div className="navSecM">
                <InputBox setSearchInput={setSearchInput} />
                <TextButton
                    text="Search"
                    onClick={() => console.log(searchInput)}
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
