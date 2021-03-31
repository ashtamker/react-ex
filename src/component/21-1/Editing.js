import React, {useState,useEffect,useRef} from 'react';


const Editing = () => {
    const [edit,setEdit] = useState(false);
    const dispalyRef = useRef();

    const onClickDisplay = () => {
        setEdit(!edit);
    }

    useEffect( ()=> {
            if(edit){
                dispalyRef.current.focus();
            } 

        },[edit])

    return(
        <div>
            {edit ? <div>
                <input ref={dispalyRef} type={"text"}></input>
                <button onClick={onClickDisplay}>save</button>
            </div> 
            : <button onClick={onClickDisplay}>edit</button>
            }
        </div>
    )    

}

export default Editing;