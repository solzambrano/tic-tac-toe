import { useState } from "react";
import './Styles/board.css'
const Square = ({value,onSquareClick}) =>{

return(
    <button className="square"
    onClick={onSquareClick}
    >{value}</button>
)
}
export default Square