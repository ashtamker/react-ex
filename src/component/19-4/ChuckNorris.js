import React,{useState} from 'react';
import axios from 'axios';

const Chucknorris = () => {
    const [categories, setCategories] = useState([])
    const [joke, setJoke] = useState([])

    const getCategory = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories')
        setCategories(response.data)
    }
    const getJokeByCategory = async (e) => {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${e.target.value}`)
        setJoke(response.data.value)

    }
    return (
        <div>
            <button onClick={getCategory}>Categories</button>

            {categories.map((j, index) => {
                return (
                  <li key={index}><button onClick={getJokeByCategory} value={j} >{j}</button></li>
                )
            })}
            <p>{joke}</p>
        </div>
    )
}

export default Chucknorris;