import React, { useState } from "react";

const ParticipantForm = ({ addParticipant }) => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) { //this checks if name is not empty (provided)
            addParticipant(name);
            setName("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Not so secret Santa's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Add Santa🎅🧑‍🎄</button>
        </form>
    );
};

export default ParticipantForm;