import React from 'react';
import axios from 'axios';


export default class Api extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`https://605c88196d85de00170da6ae.mockapi.io/heros`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      )
    }
  }