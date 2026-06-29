import Square from "./Square"
import { useState } from "react"
import './Styles/game.css'

const Board = ({xIsNext,squares,onPlay,restartGame})=>{
 
  // creates an array with nine elements and sets each of them to null
  //[null,null,null,null,null,null,null,null,null]
  const handleClick = (i) =>{
    //function creates a copy of the squares array
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares=[...squares];
    nextSquares[i] = xIsNext? "X": "O"
    onPlay(nextSquares)
  }



const calculateWinner= (squares) =>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);
  const status = winner? "Winner: " + winner: "Next player: " + (xIsNext ? "X" : "O");
  return (
        <>
        <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
        
      </div>
      <div className="board-row">
       <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
       <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
       <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        
      </div>
      {(winner || isDraw)&&
      
      <button className="button" onClick={restartGame}>Restart?</button>
}
    </>
  )
}
export default Board