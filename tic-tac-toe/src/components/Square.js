import React from 'react';
import './Square.css';

export default class Square extends React.Component {

    render() {
        return (
            <button className='square' onClick={() => {this.props.onClick(); console.log(this.props)}}>{this.props.value}</button>
        ) 
        
    }
}