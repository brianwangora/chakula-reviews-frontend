import React from "react";

export default function Header({ isDarkMode, onDarkModeClick }) {
    return(
        <header>
            <h1>CHAKULA REVIEWS</h1>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode 
            </button>
        </header>
    )
}