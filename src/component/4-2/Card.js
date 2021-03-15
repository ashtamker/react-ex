import React from 'react';

const Card = props => {
    return (
        <div>
            <div className="card">
                <img src={props.img} alt={props.img}/>
                <h2>{props.title}</h2>
                <h3>{props.description}</h3>
                <div className="links">
                    <a href={props.firstLink}>SHARE</a> 
                    <a href={props.secondLink}>LIKE</a> 
                </div>
            </div>
        </div>
    )
}

export default Card;