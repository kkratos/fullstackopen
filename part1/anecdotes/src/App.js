import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Anecdote = ({ text }) => (
  <div>
    <p>{text}</p>
  </div>
);

const Header = ({ name }) => <h1>{name}</h1>;

const Winner = ({ anecdotes, votes }) => {
  const highestVoteCount = Math.max(...votes);
  const index = votes.indexOf(highestVoteCount);
  const winner = anecdotes[index];

  if (highestVoteCount === 0) {
    return <p>No votes given yet</p>;
  }
  return (
    <div>
      <p>{winner}</p>
      <p>has {highestVoteCount} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(8).fill(0));

  const handleNextAnecdote = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(arrayIndex);
  };

  const handleVoteClick = () => {
    const newAllVotes = [...votes];
    newAllVotes[selected] += 1;
    setVotes(newAllVotes);
    console.log(votes);
  };

  return (
    <div>
      <Header name="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} />
      <Button onClick={handleVoteClick} text="vote" />
      <Button onClick={handleNextAnecdote} text="next anecdote" />
      <Header name="Anecdote with most votes" />
      <Winner anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
