import React,{useState , useEffect} from 'react';
import axios from 'axios';

const Chucknorris = () => {
    const [categories, setCategories] = useState([])
    const [joke, setJoke] = useState([])

    useEffect(() => {
        const getCategory = async () => {
            const data = await axios.get('https://api.chucknorris.io/jokes/categories')
            setCategories(data.data)
        }

        
    getCategory()
    },)
    
    const getJokeByCategory = async (e) => {
        const data = await axios.get(`https://api.chucknorris.io/jokes/random?category=${e.target.value}`)
        setJoke(data.data.value)

    }
    return (
        <div>
            <h3>{joke}</h3>
            <button>Categories</button>

            {categories.map((j, index) => {
                return (
                  <li key={index}><button onClick={getJokeByCategory} value={j} >{j}</button></li>
                )
            })}   
        </div>
    )
}

export default Chucknorris;