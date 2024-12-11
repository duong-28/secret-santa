import React, { useState } from "react";
import ParticipantForm from "./assets/components/ParticipantForm";
import ParticipantList from "./assets/components/ParticipantList";
import DrawButton from "./assets/components/DrawButton";
import ResultList from "./assets/components/ResultList";
import "./App.css";

const App = () => {
  const [participants, setParticipants] = useState([]);
  const [results, setResults] = useState([]);
  
  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  const drawNames = () => {
    let shuffled = participants.slice().sort(() => Math.random() - 0.5);
    let pairs = participants.map((participant, index) => ({
      giver: participant,
      receiver: shuffled[index]
    }));
    setResults(pairs);
  };

  return (
    <div className="App">
      <h1>Secret Santa Woo</h1>
      <ParticipantForm addParticipant={addParticipant} />
      <ParticipantList participants={participants} /> 
      <DrawButton drawNames={drawNames} />
      <ResultList results={results} />
    </div>
  );
};

export default App;