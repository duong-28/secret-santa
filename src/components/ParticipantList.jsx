const ParticipantList = ({ participants, deleteParticipant }) => {
  return (
    <ul>
      {participants.map((participant, index) => (
        <li key={index}>
          <span className="participant-name">{participant}</span>
          <button 
            className="delete-button"
            onClick={() => deleteParticipant(participant)}
          >
            👻
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ParticipantList;
