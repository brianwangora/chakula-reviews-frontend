import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import UserFormDefined from "./UserFormDefined";
import ReviewFormDefined from "./ReviewFormDefined";

export default function FormsDisplayed() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [id, setId] = useState("")
    const [name, setName] = useState("")

    function handleDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
    }

    const userIdFetcher = () => {
        fetch("https://chakula-reviews.herokuapp.com/users")
            .then((response) => response.json())
            .then((user) => {
                setId(user[user.length - 1].id)
                setName(user[user.length - 1].name)
            })
    }

    useEffect(
        userIdFetcher, []
    )

    return(
        <div className="comtainer">
            <div className={"App " + (isDarkMode ? "dark" : "light")}>
                <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
                <p>First add your name to the system in order to get an ID number which will be useful when filling out your review.</p>
                <p>Also make sure you remember the restaurant's ID number.</p>
                <UserFormDefined/>
                <p>Welcome {name}, your ID number is: {id}.</p>
                <ReviewFormDefined/>
            </div>
        </div>
    )
}