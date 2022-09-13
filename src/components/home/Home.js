import React, { useState } from "react";
import Header from "../header/Header";

export default function Home(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
    }

    return(
        <div>
            <div className={"App " + (isDarkMode ? "dark" : "light")}>
                <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
                <p>Welcome to Chakula Reviews,</p>
                <p>where you can find reviews on your favorite restaurants made by credible reviewers.</p>
                <p>Click over to Restaurants to view the restaurants we have in our database and what people have to say about them.</p>
            </div>
        </div>
        
    )
}