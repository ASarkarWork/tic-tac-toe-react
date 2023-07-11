import { useState } from 'react';
import Square from './Square'

export default function Board() {
    const [XisNext, setXisNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    let winner = null;
    let status;

    if(winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (XisNext ? "X": "O");
    }

    function handleClick(index) {

        let newSquares = squares.slice();
        if(XisNext) {
            newSquares[index] = "X";
        } else {
            newSquares[index] = "O";
        }

        setSquares(newSquares);
        setXisNext(!XisNext);
    }
    return (
    <>
    <div data-testid ="status" className="status">{status}</div>
    <div data-testid="board-row" className="board-row">
      <Square squareClick = {() => handleClick(0)} value={squares[0]}/>
      <Square squareClick = {() => handleClick(1)} value={squares[1]}/>
      <Square squareClick = {() => handleClick(2)} value={squares[2]}/> 
    </div>
    <div data-testid="board-row" className="board-row">
      <Square squareClick = {() => handleClick(3)} value={squares[3]}/>
      <Square squareClick = {() => handleClick(4)} value={squares[4]}/>
      <Square squareClick = {() => handleClick(5)} value={squares[5]}/> 
    </div>
    <div data-testid="board-row" className="board-row">
      <Square squareClick = {() => handleClick(6)} value={squares[6]}/>
      <Square squareClick = {() => handleClick(7)} value={squares[7]}/>
      <Square squareClick = {() => handleClick(8)} value={squares[8]}/> 
    </div>
    </>
    );
}