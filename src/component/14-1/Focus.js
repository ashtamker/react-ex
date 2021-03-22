import React from 'react';

class Focus extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fullName: '',
        }
        this.inputFullNameRef = React.createRef()
    }
    componentDidMount(){
        this.inputFullNameRef.current.focus()
    }

    render (){
        const {fullName} = this.state
        return (
            <div>
                <h1>Enter your name</h1>
                <p><input ref={this.inputFullNameRef} type='text' value={fullName}></input> </p>
            </div>
        )
    }

    

}



export default Focus;