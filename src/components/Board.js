import { useState } from 'react';
import Square from './Square'

export default function Board() {
    const [XisNext, setXisNext] = useState(false);

    function handleClick(index) {
        //TODO
    }
    return (
    <>
    {/* <div className="status">{status}</div> */}
    <div data-testid="board-row" className="board-row">
      <Square squareClick = {() => handleClick(0)} value={0}/>
      <Square squareClick = {() => handleClick(1)} value={1}/>
      <Square squareClick = {() => handleClick(2)} value={2}/> 
    </div>
    <div data-testid="board-row" className="board-row">
      <Square squareClick = {() => handleClick(3)} value={3}/>
      <Square squareClick = {() => handleClick(4)} value={4}/>
      <Square squareClick = {() => handleClick(5)} value={5}/> 
    </div>
    <div data-testid="board-row" className="board-row">
      <Square squareClick = {() => handleClick(6)} value={6}/>
      <Square squareClick = {() => handleClick(7)} value={7}/>
      <Square squareClick = {() => handleClick(8)} value={8}/> 
    </div>
    </>
    );
}