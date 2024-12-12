const ParticipantList = ({ participants, deleteParticipant }) => {
  return (
    <ul>
      {participants.map((participant, index) => (
        <li key={index}>{participant}
        <button onClick={() => deleteParticipant(participant)}>😫</button>
        </li>
      ))}
    </ul>
  );
};

export default ParticipantList;
