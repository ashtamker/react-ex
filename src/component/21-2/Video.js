import React, { useRef } from 'react';

const Video = () => {
    const myRef = useRef();

    return (
        <div>
            <video ref={myRef} width="750" height="450" controls >
                <source src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" type="video/mp4"/>
            </video>
            <div>
                <button onClick={() => myRef.current.play()}>play</button>
                <button onClick={() => myRef.current.pause()}>pause</button>
            </div>
        </div>
    )
}

export default Video;