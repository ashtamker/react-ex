import React, {useState} from 'react';
import './style.css';

const Checkbox = () => {
    const arr = ["one", "two", "three", "four", "five"];

    const [list, setList] = useState(arr.map(i => ({value: i, checked: false})));
    
    const onCheckedItem = (i) => {
        let copyArr = [...list];
        copyArr[i].checked = !copyArr[i].checked;
        setList(copyArr);
    }
    
    const onClickDelete = (e) => {
        let updateArr = list.filter(v => !v.checked);
        setList(updateArr);
    }

    const onClickReset = (e) => {
        setList(arr.map(i => ({value: i, checked: false})));
    }

    return(
        <div>
            {list.map((v, i) => {
                return(
                    <li className="list-item" key={i}> 
                    <input className="box" type="checkbox" checked={v.checked} onChange={() => onCheckedItem(i)}></input>
                    {v.value}
                    </li>
                )
            })}
            <button onClick={onClickDelete}>delete</button>
            <button onClick={onClickReset}>reset</button>
        </div>
    )

} 




export default Checkbox;
