import React, {useState} from 'react';
import './style.css';

export default function TimeConvert(){

    const [second , setSecond] = useState(60)

    const onChengeSec = (t) => {
        t.target.title === 'hour' ? setSecond(t.target.value * 3600) :
        t.target.title === 'min' ? setSecond(t.target.value * 60) : setSecond(t.target.value)
    }

    return (
        <div className="input-line">
            <label>sec
            <input title={"sec"} type="number" value={second} onChange={onChengeSec}></input>
            </label>
            <br/>
            <label>min
            <input title={"min"} type="number" value={second / 60} onChange={onChengeSec}></input>
            </label>
            <br/>
            <label>hour
            <input title={"hour"} type="number" value={second / 3600} onChange={onChengeSec}></input>
            </label>
        </div>
    )
}