import React from "react";
import RestaurantDetails from "./RestaurantDetails";
import ReviewDetails from "./ReviewDetails";

export default function CombinedDetails() {

    return(
        <div className="container">
            <center>
                <div>
                    <RestaurantDetails/>
                </div>
                <h3>REVIEWS</h3>
                <div>
                    <ReviewDetails/>
                </div>
            </center>
        </div>
    )
}