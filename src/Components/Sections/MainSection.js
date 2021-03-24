import React from 'react';
import '../../SCSS/MainSection.scss';
import {colors} from '../../data/variables';
import { useHistory } from 'react-router-dom';
const { primary, secondary, accent, textColor} = colors;

const MainSection = ({ objType, text, image, imageAlt, index }) => {
    const { push } = useHistory();
    const sectionPlace = index % 2 === 0 ? "right" : "left";


    const sectionStyle = {
        // background: index % 2 === 0 ? "linear-gradient(to right, white, #E1EBEE)" : "linear-gradient(to left, white, #ACE1AF)",
        // background: index % 2 === 0 ? "#E1EBEE" : "whitesmoke",
        background: index % 2 === 0 ? accent : secondary,
        // background: index % 2 === 0 ? `linear-gradient(to right, whitesmoke, whitesmoke, #ACE1AF)` : "linear-gradient(to left, whitesmoke, whitesmoke, #ACE1AF)",
        color: index % 2 === 0 ? "white" : null,
    }

    const titleStyle = {
        color: index % 2 !== 0 ? accent : null,
    }

    const buttonStyle1 = {
        background: index % 2 === 0 ? accent : null,
        color: index % 2 === 0 ? "white" : null,
        borderColor: index % 2 === 0 ? "white" : null,
    }

    const buttonStyle2 = {
        background: index % 2 !== 0 ? accent : null,
        color: index % 2 !== 0 ? "white" : null,
    }

    const handleSeePlan = () => {
        push('/customize');
    }

    return (
        <div className="main-section" style={sectionStyle}>
            <h2 style={titleStyle}>{objType}</h2>
            <div className={`section-body ${sectionPlace}`}>
                <img src={image} alt={imageAlt} />
                <div className="section-text">
                    <p>{text}</p>
                    <div className="section-button-container">
                        <button style={buttonStyle1}>see how it works</button>
                        <button onClick={handleSeePlan} style={buttonStyle2}>see my plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection;