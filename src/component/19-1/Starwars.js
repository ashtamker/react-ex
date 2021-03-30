import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Starwars = () => {
    const [episode, setEpisode] = useState('1');

    
    
    useEffect(() => {
       const movie = async () => {
            const data = await axios.get(`https://swapi.dev/api/films/${episode}`);
            setEpisode(data.data);  
        };

        console.log(movie()); 
    },);

    return(
        
        <div>
            <p>movie : {episode.title}</p>
            <p>director : {episode.director}</p>
        </div>
    )
}


export default Starwars;