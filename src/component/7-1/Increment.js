import React, { useState } from 'react';


const Increment = () => {
    const [num, setNum] = useState(0);

    const incNum = () =>{
        setNum(num + 1)
    }
    return (
        <div className = "inc">
          <div className = "btn">
              <p> {num} </p> 
              <button onClick = {incNum}>increment</button>

          </div>
        </div>
    )
}

export default Increment; 