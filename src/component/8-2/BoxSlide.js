import React, {Component} from 'react';


class BoxSlide extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        box1 : '',
        box2 : '',
        box3 : '',
    }; 

    this.myRef = React.createRef();

}
componentDidMount(){
    setTimeout(() => {
        this.setState({favoriteColor: 'red'})
        }, 1000);
}

componentDidUpdate() {
    this.myRef.current.textContent = `my fav color is ${this.state.favoriteColor}`
}

render(){
    return (
       <div>
           <h1>{`my fav color is ${this.state.favoriteColor}`}</h1>
           <div style={{color: this.props.favoriteColor }} ref = {this.myRef}></div>  
       </div>
    );

}
}

export default BoxSlide;