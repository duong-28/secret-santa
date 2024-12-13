// import StealButton from "./StealButton";

const ResultList = ({ results}) => {
  return (
    <ul>
      {results.map((result, index) => (
        <li key={index}>
          {result.giver} {"→"} {result.receiver}
          {/* <StealButton giver={result.giver} receiver={result.receiver} stealGift = {stealGift} /> */}
        </li>
      ))}
    </ul>
  );
};

export default ResultList;
