import './Board.css';
import React from 'react'
import Square from './Square';

function Board({squares, handleClick}) {
        return (
            <div className='board-warpper'>
                <Square handleClick={handleClick}  squares={squares}/>
            </div>
        )
}

export default Board;
