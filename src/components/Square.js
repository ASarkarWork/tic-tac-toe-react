export default function Square({value, squareClick}) {
    return <button onClick={squareClick} className="square">{value}</button>;
}