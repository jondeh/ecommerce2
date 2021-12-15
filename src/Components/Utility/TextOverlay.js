import React, { useState, useEffect } from 'react';
import '../../SCSS/TextOverlay.scss';

const TextOverlay = () => {
    const [overlayText, setOverlayText] = useState([
        <span>pest control is EASY.</span>,
        <span>professional products. <br></br> DIY price.</span>,
        <span>kid friendly. pet friendly.</span>,
        <span>get protected starting at $12/month.</span>,
    ]);
    const [overlayNum, setOverlayNum] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOverlayNum((overlayNum) => {
                return overlayNum < 4 ? overlayNum+1 : 0
            })
        }, 4000);
        return () => clearInterval(interval)
    }, []);

    const mappedText = overlayText.map((text,i) => {
        return <span key={i} className={`span-${i === overlayNum ? 'true' : 'false'}`}>
                {text}
        </span>
    });

    return (
        <div className="text-overlay-container">
            {mappedText}
        </div>
    )
}

export default TextOverlay;