import react, { Component } from 'react';
import BoxBody from './BoxBody';

 class ChangingBox extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "hsl(0, 100%, 50%)", count: 0, border: null }
  }

  changeColor = async () => {
    switch (this.state.count) {
      case 120:
        this.setState({ border: "50%" });
        this.setState({ count: this.state.count + 5 });
        break;
      case 200:
        this.setState({ count: 0 });
        break;
      default:
        this.setState({ count: this.state.count + 5 });
    }
    this.setState({ color: `hsl(${this.state.count},100%, 50%)` });
  }

  componentDidMount() {
    setInterval(this.changeColor, 500);
  }

  render() {

    return <div className="changeBox">
      <BoxBody color = {this.state.color} radius={this.state.border} />
    </div>
  }
}

export default ChangingBox;




// import React from 'react';

// const colors = ['#535c68', '#95afc0', '#c7ecee', '#dff9fb', '#7ed6df']

// class Change extends React.Component {
//   state = { color: 0, shape: '' };

//   componentDidMount() {
//     setInterval(() => {
//       console.log(this.state.color);
//       if(this.state.color>3){
//         this.setState({
//           color: (this.state.color +1)%5, borderRadius: this.state.shape = '50%',
//         })
//       }else{
//       this.setState({
//         color: (this.state.color + 1),
//       })}
//     }, 500);
//   }
//   render() {
//     return (
//       <div style={{
//         backgroundColor: colors[this.state.color],
//         borderRadius: this.state.shape,
//         width: '100px',
//         height: '100px'
//       }}></div>
//     )
//   };
// };
// export default Change