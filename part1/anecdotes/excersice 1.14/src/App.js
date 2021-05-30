import React, { useState } from 'react'

const Anecdote = ({ Anecdote, vote, hVote, hSelect }) => {
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{Anecdote}</p>
      <p>Has {vote} votes</p>

      <button onClick={hVote}>Vote</button>
      <button onClick={hSelect}>Next anecdote</button>
    </div>
  );
};

const AnecdoteWithMostVotes = ({ bestAnecdote, maxVote }) => {
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      {maxVote ? (
        <div>
          <p>{bestAnecdote}</p>
          <p>Has {maxVote} votes</p>
        </div>
      ) : (
        <p>No votes given</p>
      )}
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(Anecdotes.length).fill(0));

  const maxVote = Math.max(...points);
  const bestAnecdote = Anecdotes[points.indexOf(maxVote)];

  const hSelect = () => {
    let rand = generateRandom(Anecdotes.length);
    while (rand === selected) {
      rand = generateRandom(Anecdotes.length);
    }
    setSelected(rand);
  };

  const hVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  return (
    <div>
      <Anecdote
        Anecdote={Anecdotes[selected]}
        vote={points[selected]}
        hVote={hVote}
        hSelect={hSelect}
      />
      <AnecdoteWithMostVotes bestAnecdote={bestAnecdote} maxVote={maxVote} />
    </div>
  );
};

function generateRandom(length) {
  return Math.floor(Math.random() * length);
}

const Anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

export default App;
