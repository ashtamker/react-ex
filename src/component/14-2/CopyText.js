import React from 'react';

class CopyText extends React.Component {
    constructor(){
        super()
        this.state = {
            userText: '',
        }
        this.inputCopyText = React.createRef();

    }
    componentDidMount(){
        this.inputCopyText.current.focus();
    }

    onBtnClick() {
        this.inputCopyText.current.select();
        document.execCommand("copy");
    }

    render (){
       
        return (
            <div>
                <h1>Enter your name</h1>
                
                <textarea ref={this.inputCopyText} type='textarea' 
                value={this.state.value} onChange={(event) => this.setState({userText: event.target.value})}/>
                <br/>
                <button onClick={() => this.onBtnClick}>Copy me</button>
            </div>
        )
    }

    

}



export default CopyText;