import Board from "./Board"
import { useState } from "react";
const Game = () =>{
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const currentSquares = history[history.length - 1];
    console.log('current',currentSquares,history);
    
    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }
    const moves = history.map((squares, move) => {
      let description = move > 0 ? 
      'Go to move #' + move : 
      'Go to game start';
    // return (
    //   <li>
    //     <button onClick={() => jumpTo(move)}>{description}</button>
    //   </li>
    // );
  });
    return (
      <div className="game">
      <div className="game-board">
         <Board xIsNext={xIsNext} 
         squares={currentSquares} 
         onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
    )

}
export default Game