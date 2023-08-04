import React from 'react';
import './Square.css';

const Square = ({squares, handleClick}) => {

    return (
        <div className='board-row'>
            {squares?.map((item, i) => 
                <button className='square' onClick={() => handleClick(i)} key={i}>{item}</button>
            )}
        </div>
        
    )
}

export default Square;
