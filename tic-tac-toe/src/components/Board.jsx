import './Board.css';
import React, { useState } from 'react'
import Square from './Square';

function Board() {
    const [squares, setSquares] = useState(['0','1','2','3','4','5','6','7','8',]);
    const [xIsNext, setXIsNext] = useState(true);
    const calculateWinner = (squares) => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if(squares[a]   
                && squares[a] === squares[b]
                && squares[a] === squares[c]) {
                    return squares[a];
            }
        } 
        return null;
    }
    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        status = `Winner ${winner}`
    } else {
        status =  `Next player ${xIsNext ? 'X' : 'O'}`
    }
        const handleClick=  (i) => {
            const newSquares = [...squares];
            console.log(newSquares)
            if(calculateWinner(newSquares) || newSquares[i] === 'X' || newSquares[i] === 'O' ) {
                return;
            }
            newSquares[i] = xIsNext ? 'X': 'O';
            // setXIsNext(!xIsNext); //기존값을 그냥 변환
            setXIsNext((prev) => !prev ); //이전 state값을 참조해서 setState해주기
            setSquares(newSquares);

        }

        return (
            <div>
                <div className='status'>{status} </div>
                <Square handleClick={handleClick}  squares={squares}/>
            </div>
        )
}

export default Board;
