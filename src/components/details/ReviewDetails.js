import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const REVIEW = "http://localhost:9292/restaurants/review/"


export default function ReviewDetails() {
    const [score, setScore] = useState("")
    const [comment, setComment] = useState("")

    let {restaurantId} = useParams()

    const reviewInfo = REVIEW + restaurantId

    const reviewFetcher = () => {
        fetch (reviewInfo)
            .then((response) => response.json())
            .then((review) => {
                setScore(review[0].score)
                setComment(review[0].comment)
            })
    }

    useEffect(
        reviewFetcher, [] 
    )

    return(
        <div>
            <p>The score given by reviewers is: {score}.</p>
            <p>Reviewers had this to say about the restaurant: {comment}</p>
        </div>
    )
}