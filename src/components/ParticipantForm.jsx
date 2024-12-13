import { useState } from "react";

const ParticipantForm = ({ addParticipant, errorMessage }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      //this checks if name is not empty (provided)
      addParticipant(name);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Not-so-secret Santa's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add this Santa</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
};

export default ParticipantForm;
