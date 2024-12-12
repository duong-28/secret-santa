const StealButton = ({ giver, receiver, stealGift }) => {
    return (
        <button onClick={() => stealGift(giver, receiver)}>Steal</button>
    );
};

export default StealButton;