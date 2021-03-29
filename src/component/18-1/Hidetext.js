import React, {useState, Children} from 'react';
import './style.css';




const Hidetext = ({children, maxChar = 50}) => {
   const text = children; 
   const [display, setDisplay] = useState(true);
   const str = display ? text.slice(0, 100) : text; 
   
   function changeDispaly() {
       setDisplay(!display);
   } 

    return (
        <p>
            {str}
            <span className="read" onClick={changeDispaly}>{display ?  "Read More" : "Read Less"}</span>
        </p>
    )


}

const ReadMore = (props) => {
    return(
        <div>
            <Hidetext maxChar={20}>
            Inside the handleSubmit function, you prevent the default action of the form. Then update the state to the user input.
            Using POST gives you the same response object with information that you can use inside of a then call.
            To complete the POST request, you first capture the user input. Then you add the input along with the POST request, which will give you a response. You can then console.
            log the response, which should show the user input in the form.
            </Hidetext>
        </div>
    )

}


export default ReadMore;