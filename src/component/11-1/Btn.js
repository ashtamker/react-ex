import React from 'react';
import './styleBtn.css';

class Btn extends React.Component {
    render(){
        return (
            <button 
            style={{backgroundColor: this.state.color}} 
            onClick = {() => this.props.onClick(this.state.color)}>
                
  {this.state.color}            
            </button>
            
        );
    }
}




export default Btn;