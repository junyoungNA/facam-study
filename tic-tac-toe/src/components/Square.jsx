import React from 'react';
import './Square.css';

const Square = ({squares, handleClick}) => {
    console.log(squares);
    return (
        <div>
            {squares?.map((item, i) => 
                <button className='square' onClick={() => handleClick(i, squares)}>{item}</button>
            )}
        </div>
        
    )
}

export default Square;
