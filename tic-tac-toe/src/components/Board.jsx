import './Board.css';
import React, { useState } from 'react'
import Square from './Square';

function Board() {
    const [squares, setSquares] = useState(['0','1','2','3','4','5','6','7','8','9']);
    const [xIsNext, setXIsNext] = useState(true);
    const status = `Next player ${xIsNext ? 'X' : 'O'}`
        const handleClick=  (i, square) => {
            const squares = [...square];
            squares[i] = xIsNext ? 'X': 'O';
            // setXIsNext(!xIsNext); //기존값을 그냥 변환
            setXIsNext((prev) => !prev ); //이전 state값을 참조해서 setState해주기
            setSquares(squares);
        }
        return (
            <div>
                <div className='status'>{status}</div>
                <Square handleClick={handleClick}  squares={squares}/>
            </div>
        )
}

export default Board;
