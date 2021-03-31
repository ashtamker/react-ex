import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ChuckNorris = () => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        let cancel;
            const newJoke =  async () => {
                const  data = await axios.get('https://api.chucknorris.io/jokes/random', {
                    cancelToken: new axios.CancelToken(function executor(a) {
                         cancel = a; 
                         })
                 });
                 setJoke(data.data.value)
                 
        } 
        newJoke();
        return (() => {
            cancel();
        })
    },[])

    return (
        <div>
            {joke}
        </div>
    )
}

export default ChuckNorris;