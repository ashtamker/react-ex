import React from 'react';
import axios from 'axios';

class Joke extends React.Component {
    state = {
        joke: '',
    }
        getJoke = async () => {

            const request = await axios.get('https://api.chucknorris.io/jokes/random');
            this.setState({joke: request.data.value})

        }
        render() {
            return (
            <div>
                <input type="button" value="joke" onClick={this.getJoke}></input>
            <p>{this.state.joke}</p>
            </div>            
            )

 }

}
export default Joke;