import React from "react"; 

const ResultList = ({ results = [] }) => {
    return (
        <ul>
            {results.map((result, index) => (
                <li key={index}>{result.giver} {"->"} {result.receiver}</li>
            ))}
        </ul>
    );
};

export default ResultList;