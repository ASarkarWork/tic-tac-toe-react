import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Square({value, squareClick}) {
  return <button onClick={squareClick} className="square">{value}</button>;
}
function Board({XisNext, squares, onPlay}) {
  function checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(const lineIndices of lines) {
        const first = squares[lineIndices[0]];
        const second = squares[lineIndices[1]];
        const third = squares[lineIndices[2]];

        if(first && first == second && first == third)
          return first;
    }

    return null;
  }
  function handleClick(index) {
    if(squares[index] || checkWinner()) {
        return;
    }

    const newSquares = squares.slice();
    if(XisNext) {
      newSquares[index] = "X";
    } else {
      newSquares[index] = "O";
    }

    onPlay(newSquares);

    console.log("Clicked");
  }

  const winner = checkWinner(squares);
  let status;

  if(winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (XisNext ? "X": "O");
  }
  
  return (
  <>
  <div className="status">{status}</div>
  <div className="board-row">
    <Square squareClick = {() => handleClick(0)} value={squares[0]}/>
    <Square squareClick = {() => handleClick(1)} value={squares[1]}/>
    <Square squareClick = {() => handleClick(2)} value={squares[2]}/> 
  </div>
  <div className="board-row">
    <Square squareClick = {() => handleClick(3)} value={squares[3]}/>
    <Square squareClick = {() => handleClick(4)} value={squares[4]}/>
    <Square squareClick = {() => handleClick(5)} value={squares[5]}/> 
  </div>
  <div className="board-row">
    <Square squareClick = {() => handleClick(6)} value={squares[6]}/>
    <Square squareClick = {() => handleClick(7)} value={squares[7]}/>
    <Square squareClick = {() => handleClick(8)} value={squares[8]}/> 
  </div>
  </>
  );
}

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
  const moves = history.map((squares, move)=> {
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