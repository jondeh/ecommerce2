import React, { useState, useEffect } from 'react';
import '../../SCSS/TextOverlay.scss';

const TextOverlay = () => {
    const [overlayText, setOverlayText] = useState([
        <span>pest control is EASY!</span>,
        <span>professional products <br></br> DIY price</span>,
        <span>kid friendly. pet friendly.</span>,
        <span>get protected starting at $12/month</span>,
    ]);
    const [overlayNum, setOverlayNum] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setOverlayNum((overlayNum) => {
                // console.log("setOverlayNum", overlayNum++)
                overlayNum++
                return overlayNum < 4 ? overlayNum++ : 0
            })
        }, 4000);
    }, []);

    const mappedText = overlayText.map((text,i) => {
        return <span key={i} className={`span-${i === overlayNum ? 'true' : 'false'}`}>
                {text}
        </span>
    });

    console.log("OVERLAY NUM: ", overlayNum);



    return (
        <div className="text-overlay-container">
            {mappedText}
        </div>
    )
}

export default TextOverlay;