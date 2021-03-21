import React from 'react';
import 


class List extends React.Component {
    constructor(props){
        super(props)
    }

   
    render(){
     
        const nameList = data.map(({name}) => {
        return <li key={name}>{name}</li>
        }) 
        return(
        <ul>{nameList}</ul> 
        )
    }
}




export default List;