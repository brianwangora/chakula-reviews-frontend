import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RESTAURANT_INFO = "http://localhost:9292/restaurants/"

export default function RestaurantDetails() {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [restaurant_type, setRestaurant_type] = useState("")
    const [id, setId] = useState("")

    let {restaurantId} = useParams()

    const restaurantInfo = RESTAURANT_INFO + restaurantId

    const restaurantFetcher = () => {
        fetch (restaurantInfo)
            .then((response) => response.json())
            .then((restaurant) => {
                setName(restaurant.name)
                setLocation(restaurant.location)
                setRestaurant_type(restaurant.restaurant_type)
                setId(restaurant.id)
            })
    }

    useEffect(
        restaurantFetcher, []
    )

    return(
            <div>
                <h2>{name}</h2>
                <p>This restaurant is located in, {location}.</p>
                <p> This restaurant is classified as a {restaurant_type} restaurant.</p>
                <p>This restaurant's ID number is {id}.</p>
            </div>
    )
}