export default function Square({value, squareClick}) {
    return <button onClick={squareClick}  data-testid="square" className="square">{value}</button>;
}