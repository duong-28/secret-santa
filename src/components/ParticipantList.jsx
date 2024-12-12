const ParticipantList = ({ participants }) => {
  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  );
};

export default ParticipantList;
