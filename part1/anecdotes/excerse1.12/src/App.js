import React, { useState } from 'react'


const Anecdote = ({ Anecdote1,  hvote,hSelect }) => {
  return (
    <div>
      <p>{Anecdote1}</p>
    
      <button onClick={hSelect}>Next Anecdote</button>
    </div>
  );
};



const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(Anecdotes1.length).fill(0));

  
  const hSelect = () => {
    let rand = generateRandom(Anecdotes1.length);
    while (rand === selected) {
      rand = generateRandom(Anecdotes1.length);
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
        Anecdote1={Anecdotes1[selected]}
        vote={points[selected]}
        hSelect={hSelect}
        hVote={hVote}
      />
    
    </div>
  );
};

function generateRandom(length) {
  return Math.floor(Math.random() * length);
}

const Anecdotes1 = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];
export default App
