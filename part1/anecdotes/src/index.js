import React, { useState } from "react";
import ReactDOM from "react-dom";

const Anecdote = ({ content, votes }) => (
  <>
    <div>{content}</div>
    <div>has {votes} votes</div>
  </>
);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const mostVoteIndex = votes.indexOf(Math.max(...votes));

  const handleVote = selected => () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  };

  const getNextAnecdote = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote content={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={handleVote(selected)} text="vote" />
      <Button onClick={getNextAnecdote} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <Anecdote
        content={anecdotes[mostVoteIndex]}
        votes={votes[mostVoteIndex]}
      />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
