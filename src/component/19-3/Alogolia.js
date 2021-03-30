import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Alogolia = () => {
    const [query, setQuery] = useState('hooks');
    const [dataAlgolia, setDataAlgolia] = useState([]);
    const [userSearch, setUserSearch] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        
       const list = async () => {
        try {
            const data = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
            if(data){
                setLoading(false);
            }
       
            setDataAlgolia(data.data.hits);  
        }
        catch(err) {
            alert("wrong");
        }
        };

        list(); 
    },[userSearch]);

    const onChangeInput = (e) => {
        setQuery(e.target.value);
    }

    const onClickSearch = () => {
        setLoading(true);
        setUserSearch(query);
    }

    return(
        <div>
            <input type={"text"} placeholder={"hooks"} onChange={onChangeInput}></input>
            <button onClick={onClickSearch}>search</button>
            {loading ? <p>please wait</p> : ""}
            <ul>
                {dataAlgolia.map(c => {
                return <li key={c.objectID}>{c.title} <a href={c.url}>link to article</a></li>   
                })}
            </ul>   
            

        </div>
    )
}

export default Alogolia; 