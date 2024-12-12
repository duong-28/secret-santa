import { useState } from "react";
import ParticipantForm from "./components/ParticipantForm";
import ParticipantList from "./components/ParticipantList";
import DrawButton from "./components/DrawButton";
import ResultList from "./components/ResultList";

import "./App.css";

const App = () => {
  const [participants, setParticipants] = useState([]);
  const [results, setResults] = useState([]);

  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  const participantsShuffled = [...participants].sort(
    () => 0.5 - Math.random()
  );

  const generatePairs = () => {
    // const participantsShuffled = [...participants].sort(() => 0.5 - Math.random());
    return participants.reduce((acc, giver) => {
      // find a receiver that is not equal to the giver
      let receiver = participantsShuffled.find(
        (participant) => participant !== giver
      );

      // if last person was assigned to their own name swap with the first one
      if (receiver === undefined) {
        receiver = acc[0].receiver;
        acc[0].receiver = giver;
      }

      acc.push({ giver, receiver });
      // remove already selected receiver
      participantsShuffled.splice(participantsShuffled.indexOf(receiver), 1);

      return acc;
    }, []);
  };

  const drawNames = () => {
    setResults(generatePairs());
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
