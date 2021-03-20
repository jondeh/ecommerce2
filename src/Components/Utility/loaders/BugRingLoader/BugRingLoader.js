import React, { useState } from 'react';
import {AiFillBug} from 'react-icons/ai';
import './BugRingLoader.scss';

const BugRingLoader = ({ text, count, timing, speed, icon, color, size, delay }) => {

    let defaultCount = 15;
    let defaultSpeed = 1;
    let defaultTimingFunction = "linear";
    let defaultColor = "black";
    let defaultSize = 16;
    let defaultIcon = <AiFillBug color={color ? color : defaultColor} size={size ? size : defaultSize} />;
    let defaultDelay = 16;

    count = count ? count : defaultCount;
    speed = speed ? speed : defaultSpeed;
    delay= delay ? delay : defaultDelay;

    // console.log("SPEED", speed)

    let time = (count / (count / speed)) - (count / (speed * 10))

    // console.log("time", time)

    const bugDivs = [...Array(count)].map((e,i) => {
        let idNum = i + 1;
        // console.log("NUMBERS",  idNum, count)
        let modifier = (time*delay)/(idNum + (idNum  - 2));
        let finalDelay = -(time/modifier);

        // console.log("modifier", modifier)
        // console.log("finalDelay", finalDelay)
        let opacity = ((idNum)/count);
        return (
            <div 
                id={`spin${idNum}`} 
                className="spin-circle"
                style={{
                    animationDuration: `${time}s`,
                    animationDelay: `${finalDelay}s`,
                    opacity: opacity,
                    animationTimingFunction: timing ? timing : defaultTimingFunction,
                }}
                > 
                {/* {icon ? icon : <>{defaultIcon} <h1>{idNum}</h1></>} */}
                {icon ? icon : defaultIcon}
            </div>
        )
    });

    return (
        <div className="circle">
            {
                text ? <h3>{text}</h3> : null
            }
            {bugDivs}
        </div>
    );
};

export default BugRingLoader;