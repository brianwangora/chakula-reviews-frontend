import React from "react";
import { Link } from "react-router-dom";

export default function RestaurantCard({restaurantName, restaurantId}) {
    return(
        <div className="card" style={{width: 18 + 'rem'}}>
            <div className="card-body">
                <h5 className="card-title">{restaurantName}</h5>
                <Link to={"/restaurants/"+restaurantId} className="btn btn-primary">DETAILS</Link>
            </div>
        </div>
    )
}