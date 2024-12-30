// import StealButton from "./StealButton";

const ResultList = ({ results }) => {
  return (
    <ul className="results-list">
      {results.map((pair, index) => (
        <li key={index}>
          <div className="result-pair">
            <span className="giver">{pair.giver}</span>
            <span className="arrow">→</span>
            <span className="receiver">{pair.receiver}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ResultList;
