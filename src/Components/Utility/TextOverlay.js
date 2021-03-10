import React, { useState, useEffect } from 'react';
import '../../SCSS/TextOverlay.scss';

const TextOverlay = () => {
    const [overlayText, setOverlayText] = useState([
        "pest control is EASY!",
        "professional protection delivered to your door",
        "kid friendly. pet friendly.",
        "buy a box, give a box",
    ]);
    const [overlayNum, setOverlayNum] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setOverlayNum((overlayNum) => {
                // console.log("setOverlayNum", overlayNum++)
                return overlayNum < 4 ? overlayNum++ : 0
            })
        }, 8000)
    }, []);

    const mappedText = overlayText.map((text,i) => {
        return <span key={i} className={`span-${i === overlayNum ? 'true' : 'false'}`}>
                {text}
        </span>
    })



    return (
        <div className="text-overlay-container">
            {mappedText}
        </div>
    )
}

export default TextOverlay;