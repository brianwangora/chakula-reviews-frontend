import React, {useState} from "react";

const REVIEWS = "http://localhost:9292/reviews"

export default function ReviewFormDefined(){
    const [id, setId] = useState("")
    const [user_id, setUserId] = useState("")
    const [restaurant_id, setRestaurantId] = useState("")
    const [score, setScore] = useState("")
    const [comment, setComment] = useState("")
    const [newReview, setNewReview] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setUserId("")
        setRestaurantId("")
        setScore("")
        setComment("")
        const reviewData = {
            id: id,
            user_id: user_id,
            restaurant_id: restaurant_id,
            score: score,
            comment: comment,
        };
        fetch(REVIEWS, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(reviewData),
        })
            .then((response) => response.json())
            .then((newReview) => setNewReview(newReview));
    }

    return(
        <form className="NewReview" onSubmit={handleSubmit}>
            <label>
                User ID:
                <input
                    type="text"
                    name="userId"
                    value={user_id}
                    onChange={(e) => setUserId(e.target.value)}
                />
            </label>
            <label>
                Restaurant ID:
                <input
                    type="text"
                    name="restaurantId"
                    value={restaurant_id}
                    onChange={(e) => setRestaurantId(e.target.value)}
                />
            </label>
            <label>
                Score:
                <input
                    type="text"
                    name="score"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                />
            </label>
            <label>
                Comment:
                <input
                    type="text"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </label>
            <button className="button" type="submit">Add a Review</button>
        </form>
    )

}