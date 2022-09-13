import React, {useState} from "react";

const USERS = "https://chakula-reviews.herokuapp.com/users"

export default function UserFormDefined(){
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [newUser, setNewUser] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        setName("")
        const userData = {
            id: id,
            name: name,
        };
        fetch(USERS, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((response) => response.json())
            .then((newUser) => setNewUser(newUser));
    }

    return(
        <form className="NewVehicle" onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name ="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <button className="button" type="submit">Add New User</button>
        </form>
    )
}