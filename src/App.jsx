import { useState } from "react";
import ParticipantForm from "./components/ParticipantForm";
import ParticipantList from "./components/ParticipantList";
import DrawButton from "./components/DrawButton";
import ResultList from "./components/ResultList";

import "./App.css";

const App = () => {
  const [participants, setParticipants] = useState([]);
  const [results, setResults] = useState([]);
  const [round, setRound] = useState(1);
  const [stolenGifts, setStolenGifts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [namesDrawn, setNamesDrawn] = useState(false);

  const addParticipant = (name) => {
    if (participants.includes(name)) {
      setErrorMessage(`Ooops, ${name} is already a Santa!`);
    }else {
      setParticipants([...participants, name]);
      setErrorMessage("");
    }
  };

  const deleteParticipant = (name) => {
    console.log(`Deleting ${name}`);
    setParticipants(participants.filter((participant) => participant !== name));
  };

  const participantsShuffled = [...participants].sort(() => 0.5 - Math.random()
  );

  const generatePairs = () => {
    console.log('Generating pairs..');
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
    console.log('Drawing names..');
    const pairs = generatePairs();
    console.log('Pairs:', pairs);
    setResults(pairs);
    setNamesDrawn(true); 
    // setResults(generatePairs());
  };

  const stealGift = (giver, receiver) => {
    console.log(`Stealing gift from ${giver} to ${receiver}`);
    setStolenGifts([...stolenGifts, { giver, receiver }]);
    setRound(round + 1);
  };

  return (
    <div className="App">
      <h1>She Codes Santa🧁💜 </h1>
      <ParticipantForm addParticipant={addParticipant} errorMessage={errorMessage} />
      <div className="container">
        {!namesDrawn && (
          <ParticipantList participants={participants} deleteParticipant={deleteParticipant} />
        )}
        {namesDrawn && <ResultList results={results} stealGift={stealGift} />}
        <DrawButton drawNames={drawNames} />
      </div>
      <h2>Stolen Gifts</h2>
      <ul className="stolen-gifts text-align">
        {stolenGifts.map((gift, index) => (
          <li key={index}>
            {gift.giver} stole from {gift.receiver}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
