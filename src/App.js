import './App.css';
import { useState } from 'react';

import Board from './components/Board'


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const XisNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(newSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((_squares, move)=> {
    let description;
    if(move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key = {move}>
        <button onClick = {() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board XisNext={XisNext} squares = {currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}