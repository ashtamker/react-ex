import React from 'react';
import Btn from './Btn';

const colorStorage = ["red", "blue", "orange"];

class ButtonColor extends React.Component {
    state = {color: ''};
    
    onClickButton(color){
        this.setState({color: color})
    }
render(){
    return (
        <>
        {colorStorage.map(c => 
        <Btn key={c} color={c} onClick={(c) => this.onClickButton(c)} />)}
        <h1 style={{color: this.state.color}}>{`the current color is ${this.state.color}`}</h1>
        </>
    );
}
}

export default ButtonColor;