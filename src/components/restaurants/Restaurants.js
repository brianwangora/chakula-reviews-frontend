import React, { useEffect, useState } from "react";
import RestaurantCard from "../card/RestaurantCard";

const RESTAURANTS = "https://chakula-reviews.herokuapp.com/restaurants"

export default function Restaurants(){
    const [restaurants, setRestaurants] = useState([])

    const restaurantFetcher = () => {
        fetch (RESTAURANTS)
            .then((response) => response.json())
            .then((restaurants) => {
                setRestaurants(restaurants)
            })
    }

    useEffect(
        restaurantFetcher, []
    )

    let restaurantCards = restaurants.map((restaurant) => (<RestaurantCard restaurantName={restaurant.name} restaurantId={restaurant.id} key={restaurant.id}/>))

    return(
        <div className="container">
            <h1>CHAKULA REVIEWS</h1>
            <p>The restaurants in our database</p>
            <div className="row">
                {restaurantCards}
            </div>
        </div>
    )
}