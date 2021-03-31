import React, { useState } from 'react';
import ChuckNorris from './ChuckNorris';

const CancelRequest = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'Remove Joke' : 'Display Joke'}</button>
            {toggle ? <ChuckNorris /> : null}
        </div>
    )
}

export default CancelRequest;