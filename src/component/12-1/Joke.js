import React from 'react';
import axios from 'axios';

class Joke extends React.Component {
    constructor(props) {
        super(props);
    }
        async componentDidMount() {

            const request = await axios.get('https://api.chucknorris.io/jokes/random'); 
            console.log(request.value);

        }
        render() {
            return (
            <div>
                
            </div>            
            )

 }

}
export default Joke;