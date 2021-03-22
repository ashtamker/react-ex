import React from 'react';

class CopyText extends React.Component {
    constructor(props){
        super(props)
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
        const {userText} = this.state
        return (
            <div>
                <h1>Enter your name</h1>
                <p><textarea ref={this.inputCopyText} type='textarea' 
                value={this.state.userText} onChange={(event) => this.setState({userText: event.target.userText})}></textarea> </p>
                <button onClick={() => this.onBtnClick}>Copy me</button>
            </div>
        )
    }

    

}



export default CopyText;