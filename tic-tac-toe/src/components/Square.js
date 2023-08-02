import React from 'react';
import './Square.css';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : null, //state생성 초기값 null 지정
        }
    }
    render() {
        return (
            <button className='square' onClick={() => this.setState({value :'x'})}>{this.state.value}</button>
        ) 
        
    }
}