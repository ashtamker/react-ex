import React,{useState, useEffect} from 'react';
import axios from 'axios';


const Countries = () => {

const [countriesList, setCountriesList] = useState([]);

useEffect(() => {
    const allCountries = async () => {
         const data = await axios.get(`https://restcountries.eu/rest/v2/all`);
         setCountriesList(data.data);  
     };
   allCountries(); 
 },[]);


return(
        <div>
            
            <ul>
                {countriesList.map(c => {
                return <li>{c.name}</li> 
                    
                })}
                
            </ul>

        </div>
    )
}


export default Countries