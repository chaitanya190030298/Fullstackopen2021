import React, { useState } from 'react'
const Anecdote = ({ anecdote, vote, handleVote, handleSelect }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>Has {vote} votes</p>

      <button onClick={handleVote}>Vote</button>
      <button onClick={handleSelect}>Next Anecdote</button>
    </div>
  );
};


const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));


  const handleSelect = () => {
    let rand = generateRandom(anecdotes.length);
    while (rand === selected) {
      rand = generateRandom(anecdotes.length);
    }
    setSelected(rand);
  };

  const handleVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  return (
    <div>
      <Anecdote
        anecdote={anecdotes[selected]}
        vote={points[selected]}
        handleVote={handleVote}
        handleSelect={handleSelect}
      />
    </div>
  );
};

function generateRandom(length) {
  return Math.floor(Math.random() * length);
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

export default App;
