import React from 'react';
import axios from 'axios';


export default class Api extends React.Component {
    state = {
      heros: []
    }
  
    componentDidMount() {
      axios.get(`https://605c88196d85de00170da6ae.mockapi.io/heros`)
        .then(res => {
          const heros = res.data;
          this.setState({ heros });
        })
    }
  
    render() {
      return (
        <ul>
          { this.state.heros.map(heros => 
          <li>{heros.name} 
          <img src={heros.img} height={"150px"} width={"150px"}></img>
          </li>)}
        </ul>
      )
    }
  }